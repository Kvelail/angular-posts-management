import { Component, OnInit, OnDestroy, Inject, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

import { forkJoin, takeUntil, Subject } from 'rxjs';

import { PostsManagementService } from './state/services/posts-management.service';

import { PostsManagementStore } from './state/store/posts-management.store';

import { PostsManagementStoreModel } from './state/model/posts-management-store.model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
    private destroy$ = new Subject<void>();

    constructor(
        @Inject(DOCUMENT) private document: Document,
        private renderer: Renderer2,
        private postsManagementService: PostsManagementService,
        private postsManagementStore: PostsManagementStore,
        private router: Router
    ) {}

    ngOnInit() {
        this.changeBodyBackground();

        this.getAllData();
    }

    public getAllData(): void {
        const allPosts$ = this.postsManagementService.getAllPosts();
        const allUsers$ = this.postsManagementService.getAllUsers();
        const allComments$ = this.postsManagementService.getAllComments();

        forkJoin({
            allPosts: allPosts$,
            allUsers: allUsers$,
            allComments: allComments$,
        })
            .pipe(takeUntil(this.destroy$))
            .subscribe((res: PostsManagementStoreModel) => {
                this.postsManagementStore.update((store) => {
                    return {
                        ...store,
                        allPosts: res.allPosts,
                        allUsers: res.allUsers,
                        allComments: res.allComments,
                    };
                });
            });

        this.router.navigate(['/posts']);
    }

    private changeBodyBackground(): void {
        this.renderer.addClass(this.document.body, 'body-background');
    }

    ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
