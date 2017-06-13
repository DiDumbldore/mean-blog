import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorsColumnsComponent } from './components/authors-columns/authors-columns.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

export const AppRoutes: Routes = [

    { path: '', redirectTo: 'admin/posts', pathMatch: 'full' },
    {
        path: 'admin/posts', component: PostsComponent

    },
    {
        path: 'admin/posts/:category',
        component: PostsComponent,
        resolve: {
            category: 'category'
        }
    },
    { path: 'admin/posts/details/:id', component: PostDetailComponent },
    { path: 'admin/authors-columns', component: AuthorsColumnsComponent },
    { path: 'admin/create', component: CreatePostComponent },
    { path: '**', redirectTo: 'admin/posts' }
]