import { Injectable } from '@angular/core';

import { QueryEntity } from '@datorama/akita';

import {
    PostsManagementStore,
    PostsManagementState,
} from './posts-management.store';

@Injectable({ providedIn: 'root' })
export class PostsManagementQuery extends QueryEntity<PostsManagementState> {
    public allPosts$ = this.select('allPosts');
    public allComments$ = this.select('allComments');
    public allUsers$ = this.select('allUsers');

    constructor(protected postManagementStore: PostsManagementStore) {
        super(postManagementStore);
    }
}
