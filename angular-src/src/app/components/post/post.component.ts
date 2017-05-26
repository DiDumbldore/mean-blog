import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import { CategoryService } from '../../services/category.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService, CategoryService]
})

export class PostComponent implements OnInit {
  posts: any[];
  categories: any[];


  constructor(private _postService: PostService,
    private _categoryService: CategoryService) { }

  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(categories => this.categories = categories);

    this.loadPosts();
  }

  loadPosts(filter?) {
    this._postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  reloadPosts(filter) {
    // this.currentPost = null;
    console.log(filter);

    this.loadPosts(filter);

  }

}
