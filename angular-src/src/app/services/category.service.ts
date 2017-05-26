import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoryService {

  private _url = "http://localhost:3000/admin/post_categories";

  constructor(private _http: Http) { }

  getCategories(){
    console.log("get-categories service works");
      return this._http.get(this._url)
      	 .map(res => res.json())
  }

}
