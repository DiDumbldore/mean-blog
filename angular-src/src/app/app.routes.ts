import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AuthorsColumnsComponent } from './components/authors-columns/authors-columns.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';


export const AppRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'authors-columns', component: AuthorsColumnsComponent },
    { path: 'settings', component: SettingsComponent },
    {
        path: 'dashboard/:category',
        component: DashboardComponent,
        resolve: {
            category: 'category'
        }
    },
     { path: "dashboard/details/:id", component: PostDetailComponent },
]