import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import 'rxjs/add/operator/map';
// import { PostService } from '../../services/post.service';


@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {
  categories: any[];

  constructor(private _categoryService: CategoryService) { }

// categoryParams: string;

  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(categories => this.categories = categories);
  }


  onSelect(categoryItem: CategoryItem): void {
    this.selectedCategory = categoryItem;
  }

  // onChange(){
  //   console.log("categories changed " +  this.selectedCategory.category);
  //   this.selectedCategory.category;
  //   this._postService.setArrayReference(this.categoryParams);
  // }

  selectedCategory: CategoryItem;
}

export class CategoryItem {
  category: string;
} 		  