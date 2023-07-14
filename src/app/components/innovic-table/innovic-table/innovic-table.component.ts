import {
    Component,
    ElementRef,
    OnDestroy,
    OnInit,
    ViewChild,
} from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { PostsManagementService } from 'src/app/state/services/posts-management.service';

import { PostsManagementQuery } from 'src/app/state/store/posts-management.query';

import { POSTS_TABLE_HEADER_ITEMS } from 'src/app/state/utils/static';

import { OnlyTitleModel } from 'src/app/state/model/only-title.model';
import { PostsModel } from 'src/app/state/model/posts.model';
import { PaginationModel } from 'src/app/state/model/pagination.model';
import { UsersModel } from 'src/app/state/model/users.model';
import { PostsInfoDataModel } from 'src/app/state/model/post-info-data.model';
import { CommentsModel } from 'src/app/state/model/comments.model';

@Component({
    selector: 'app-innovic-table',
    templateUrl: './innovic-table.component.html',
    styleUrls: ['./innovic-table.component.scss'],
})
export class InnovicTableComponent implements OnInit, OnDestroy {
    @ViewChild('titleInput')
    public titleInput!: ElementRef;
    @ViewChild('titleBody')
    public titleBody!: ElementRef;

    private destroy$ = new Subject<void>();

    public tableHeaderItems: OnlyTitleModel[] = [];

    public postsList: PostsModel[] = [];
    public postsListToDisplay: PostsModel[] = [];

    public postInfoDataToDisplay: PostsInfoDataModel | null = null;

    public numberOfPaginationArray: PaginationModel[] = [];

    public isReviewingPost: boolean = false;
    public isEditingPost: boolean = false;

    constructor(
        private postsManagementService: PostsManagementService,
        private postsManagementQuery: PostsManagementQuery
    ) {}

    ngOnInit(): void {
        this.getTableHeaderItems();

        this.getAllPosts();
    }

    public trackByIdentity = (index: number, _: any): number => index;

    private getTableHeaderItems(): void {
        this.tableHeaderItems = POSTS_TABLE_HEADER_ITEMS;
    }

    private getAllPosts(): void {
        this.postsManagementQuery.allPosts$
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: PostsModel[]) => {
                if (res) {
                    this.postsList = res;

                    this.postsListToDisplay = this.postsList.slice(0, 15);

                    /* 15 or lower posts per page in pagination */
                    this.numberOfPaginationArray = Array(
                        Math.ceil(this.postsList.length / 15)
                    )
                        .fill(0)
                        .map((_, i) => {
                            return {
                                number: i + 1,
                                isActive: i === 0 ? true : false,
                            };
                        });
                }
            });
    }

    public handlePaginationNumberEmit(paginationNumber: number): void {
        /* Change active pagination number */
        this.numberOfPaginationArray = this.numberOfPaginationArray.map(
            (item: PaginationModel, index: number) => {
                if (item.isActive) {
                    return {
                        ...item,
                        isActive: false,
                    };
                }

                if (index === paginationNumber - 1) {
                    return {
                        ...item,
                        isActive: true,
                    };
                }

                return item;
            }
        );

        /* Display 15 posts per page, custom pagination */
        const numberOfPostsToDisplay = paginationNumber * 15;

        const newPostsArray = this.postsList
            .slice(0, numberOfPostsToDisplay)
            .slice(-15);

        this.postsListToDisplay = newPostsArray;

        const lastNumberOfPaginationArray = this.numberOfPaginationArray.find(
            (_, index: number) =>
                index === this.numberOfPaginationArray.length - 1
        )?.number;

        if (lastNumberOfPaginationArray === paginationNumber) {
            const numberOfPostsToDisplay = (paginationNumber - 1) * 15;

            this.postsListToDisplay = this.postsList.slice(
                numberOfPostsToDisplay
            );
        }
    }

    public handleIsReviewingClick(postOrdinal: number): void {
        this.isReviewingPost = true;

        let selectedPostUserId: number | null = null;

        /* Get info for the post that was clicked */
        this.postsManagementQuery.allPosts$
            .pipe(takeUntil(this.destroy$))
            .subscribe((res) => {
                selectedPostUserId = res.find(
                    (item: PostsModel) => item.id === postOrdinal
                ).userId;

                this.postInfoDataToDisplay = {
                    ...this.postInfoDataToDisplay,
                    postInfo: res.find(
                        (item: PostsModel) => item.id === postOrdinal
                    ),
                };
            });

        this.postsManagementQuery.allUsers$
            .pipe(takeUntil(this.destroy$))
            .subscribe((res) => {
                this.postInfoDataToDisplay = {
                    ...this.postInfoDataToDisplay,
                    userInfo: res.find(
                        (item: UsersModel) => item.id === selectedPostUserId
                    ),
                };
            });

        this.postsManagementQuery.allComments$
            .pipe(takeUntil(this.destroy$))
            .subscribe((res) => {
                this.postInfoDataToDisplay = {
                    ...this.postInfoDataToDisplay,
                    commentsInfo: res.filter(
                        (item: CommentsModel) => item.postId === postOrdinal
                    ),
                };
            });
    }

    public handleBackClick(): void {
        this.isReviewingPost = false;

        this.isEditingPost = false;
    }

    public handleEditPostClick(): void {
        this.isEditingPost = true;

        const currentPostTitle = this.postInfoDataToDisplay?.postInfo?.title;
        const currentPostBody = this.postInfoDataToDisplay?.postInfo?.body;

        setTimeout(() => {
            this.titleInput.nativeElement.value = currentPostTitle;
            this.titleInput.nativeElement.focus();

            this.titleBody.nativeElement.value = currentPostBody;
        }, 100);
    }

    public handleSavePostClick(): void {
        if (
            !this.titleInput.nativeElement.value ||
            !this.titleBody.nativeElement.value
        ) {
            if (!this.titleInput.nativeElement.value) {
                this.titleInput.nativeElement.focus();
            }

            if (!this.titleBody.nativeElement.value) {
                this.titleBody.nativeElement.focus();
            }

            return;
        }

        const postId = this.postInfoDataToDisplay?.postInfo?.id;

        const newPostTitle = this.titleInput.nativeElement.value;
        const newPostBody = this.titleBody.nativeElement.value;

        /* Update store from service */
        this.postsManagementService.updateStore(
            postId,
            newPostTitle,
            newPostBody
        );

        this.isEditingPost = false;
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
