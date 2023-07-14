import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AngularSvgIconModule } from 'angular-svg-icon';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { InnovicHeaderComponent } from './components/innovic-header/innovic-header.component';
import { InnovicFooterComponent } from './components/innovic-footer/innovic-footer.component';
import { InnovicTableComponent } from './components/innovic-table/innovic-table/innovic-table.component';
import { InnovicPostComponent } from './components/innovic-table/innovic-post/innovic-post.component';
import { InnovicLatestCommentsComponent } from './components/innovic-latest-comments/innovic-latest-comments/innovic-latest-comments.component';
import { InnovicCommentComponent } from './components/innovic-latest-comments/innovic-comment/innovic-comment.component';
import { InnovicPaginationComponent } from './components/innovic-pagination/innovic-pagination.component';
import { InnovicAvatarComponent } from './components/innovic-avatar/innovic-avatar.component';
import { InnovicUnderConstructionComponent } from './components/innovic-under-construction/innovic-under-construction.component';
import { InnovicPostsPageComponent } from './components/innovic-posts-page/innovic-posts-page.component';
import { InnovicLogoComponent } from './components/innovic-logo/innovic-logo.component';

@NgModule({
    declarations: [
        AppComponent,
        InnovicHeaderComponent,
        InnovicFooterComponent,
        InnovicTableComponent,
        InnovicPostComponent,
        InnovicLatestCommentsComponent,
        InnovicCommentComponent,
        InnovicPaginationComponent,
        InnovicAvatarComponent,
        InnovicUnderConstructionComponent,
        InnovicPostsPageComponent,
        InnovicLogoComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        AngularSvgIconModule.forRoot(),
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
