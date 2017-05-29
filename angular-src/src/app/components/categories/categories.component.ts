import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import { PostService } from '../../services/post.service';
import 'rxjs/add/operator/map';
import { PostComponent } from '../post/post.component';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService, PostService]
})
export class CategoriesComponent implements OnInit {
  categories: any[];
  posts: any[];


  constructor(private _categoryService: CategoryService,
    private _postService: PostService) { }

  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(categories => this.categories = categories)

    

  }

  onClick(event, value){
      console.log(event);
      console.log(event);
    }


  onSelect(categoryItem: CategoryItem): void {
    this.selectedCategory = categoryItem;
  }

  selectedCategory: CategoryItem;




  // loadPosts(filter?){
  //   this._postService.getPosts()
  //     .subscribe(posts => this.posts = posts);
  // }

  //  reloadPosts(filter) {
  //     // this.currentPost = null;
  //     console.log(filter);

  //     this.loadPosts(filter);

  //   }

  blah() {
    console.log("fuck");
  }

}

export class CategoryItem {
  category: string;
}