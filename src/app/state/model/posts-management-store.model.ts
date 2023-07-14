import { UsersModel } from './users.model';
import { PostsModel } from './posts.model';
import { CommentsModel } from './comments.model';

export interface PostsManagementStoreModel {
    allUsers: UsersModel[];
    allPosts: PostsModel[];
    allComments: CommentsModel[];
}
