import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { AppRoutes } from './app.routes';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AuthorsColumnsComponent } from './components/authors-columns/authors-columns.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { TagsComponent } from './components/tags/tags.component';
import { PostComponent } from './components/post/post.component';
import { PostDetailComponent } from './components/post-detail/post-detail.component';
import { TinymceEditorComponent } from './components/tinymce-editor/tinymce-editor.component';
import { PostsComponent } from './components/posts/posts.component';
import { CreatePostComponent } from './components/create-post/create-post.component';

import { PostService } from './services/post.service';
import { CategoryService } from './services/category.service';

import 'rxjs/add/operator/map';
import 'rxjs/Observable';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    AuthorsColumnsComponent,
    SidebarComponent,
    CategoriesComponent,
    TagsComponent,
    PostComponent,
    PostDetailComponent,
    TinymceEditorComponent,
    PostsComponent,
    CreatePostComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(AppRoutes),
  ],
  providers: [
    PostService,
    CategoryService,
    {
      provide: 'category',
      useValue: () => {
        return {
          id: 1,
          title: '',
        }
      }
    }
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
