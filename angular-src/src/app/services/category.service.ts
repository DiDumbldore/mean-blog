import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  private _categoryUrl = "http://localhost:3000/admin/post_categories";

  constructor(private _http: Http) { }

  getCategories(){
    // console.log("get-categories service works");
      return this._http.get(this._categoryUrl)
      	 .map(res => res.json())
  }
  
}
