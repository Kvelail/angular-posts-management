import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';

import { PostsManagementStore } from '../store/posts-management.store';

import { PostsModel } from '../model/posts.model';

@Injectable({
    providedIn: 'root',
})
export class PostsManagementService {
    private postsUrl = 'https://jsonplaceholder.typicode.com/posts';
    private commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
    private usersUrl = 'https://jsonplaceholder.typicode.com/users';

    constructor(
        private httpClient: HttpClient,
        private postsManagementStore: PostsManagementStore
    ) {}

    public getAllPosts(): Observable<any> {
        return this.httpClient.get(this.postsUrl);
    }

    public getAllComments(): Observable<any> {
        return this.httpClient.get(this.commentsUrl);
    }

    public getAllUsers(): Observable<any> {
        return this.httpClient.get(this.usersUrl);
    }

    public updateStore(
        postId: number | undefined,
        newPostTitle: string,
        newPostBody: string
    ): void {
        this.postsManagementStore.update((store) => {
            const newPostValue = {
                title: newPostTitle,
                body: newPostBody,
            };

            return {
                ...store,
                allPosts: store['allPosts'].map((item: PostsModel) => {
                    if (item.id === postId) {
                        return {
                            ...item,
                            ...newPostValue,
                        };
                    }

                    return item;
                }),
            };
        });
    }
}
