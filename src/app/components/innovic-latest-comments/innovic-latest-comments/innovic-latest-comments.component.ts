import { Component, OnDestroy, OnInit } from '@angular/core';

import { Subject, takeUntil } from 'rxjs';

import { PostsManagementQuery } from 'src/app/state/store/posts-management.query';

import { CommentsModel } from 'src/app/state/model/comments.model';

@Component({
    selector: 'app-innovic-latest-comments',
    templateUrl: './innovic-latest-comments.component.html',
    styleUrls: ['./innovic-latest-comments.component.scss'],
})
export class InnovicLatestCommentsComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    public commentsList: CommentsModel[] = [];

    constructor(private postsManagementQuery: PostsManagementQuery) {}

    ngOnInit() {
        this.getLatestComments();
    }

    public trackByIdentity = (index: number, _: any): number => index;

    private getLatestComments(): void {
        /* Get every fifth comment which is last for every post */

        this.postsManagementQuery.allComments$
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: CommentsModel[]) => {
                if (res) {
                    for (let index = 0; index < res.length; index += 5) {
                        this.commentsList = [...this.commentsList, res[index]];
                    }
                }
            });
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
