import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { InnovicUnderConstructionComponent } from './components/innovic-under-construction/innovic-under-construction.component';
import { InnovicPostsPageComponent } from './components/innovic-posts-page/innovic-posts-page.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    {
        path: 'posts',
        component: InnovicPostsPageComponent,
    },
    {
        path: 'features',
        component: InnovicUnderConstructionComponent,
    },
    {
        path: 'pricing',
        component: InnovicUnderConstructionComponent,
    },
    {
        path: 'support',
        component: InnovicUnderConstructionComponent,
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
