import { Injectable } from '@angular/core';

import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';

import { PostsManagementStoreModel } from '../model/posts-management-store.model';

export interface PostsManagementState
    extends EntityState<PostsManagementStoreModel> {}

export const initialState = (): PostsManagementState => {
    return {
        allUsers: null,
        allPosts: null,
        allComments: null,
    };
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'postsManagement' })
export class PostsManagementStore extends EntityStore<PostsManagementState> {
    constructor() {
        super(initialState());
    }
}
