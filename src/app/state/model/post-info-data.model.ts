import { UsersModel } from './users.model';
import { PostsModel } from './posts.model';
import { CommentsModel } from './comments.model';

export interface PostsInfoDataModel {
    userInfo?: UsersModel | null;
    postInfo?: PostsModel | null;
    commentsInfo?: CommentsModel[] | null;
}
