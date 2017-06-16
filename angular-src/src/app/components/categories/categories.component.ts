import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../services/category.service';
import 'rxjs/add/operator/map';
// import { PostService } from '../../services/post.service';

import * as $ from 'jquery';
declare var jQuery: any;

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss'],
  providers: [CategoryService]
})
export class CategoriesComponent implements OnInit {
  categories: any[];
  // uniqueCategories: any[];

  constructor(private _categoryService: CategoryService) {

  }

  // groupBy(items, propertyName) {
  //   var result = [];
  //   $.each(items, function (index, item) {
  //     if ($.inArray(item[propertyName], result) == -1) {
  //       result.push(item[propertyName]);
  //     }
  //   });
  //   return result;
  // }

  // categoryParams: string;

  ngOnInit() {
    this._categoryService.getCategories()
      .subscribe(categories => this.categories = categories);

      // this.uniqueCategories = this.groupBy(this.categories, 'category');

    // var uniqueCategories = [];

    // $.each(categories, function (index, value) {
    //   if ($.inArray(value.category, uniqueCategories) === -1) {
    //     uniqueCategories.push(value.category);
    //   }
    // })
    // console.log("not unique " + this.categories);
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