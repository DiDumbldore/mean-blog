import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _url = "http://localhost:3000/admin/posts";
  private _categoryUrl = "http://localhost:3000/admin/posts/:category";

  constructor(private _http: Http) { }

  getPosts(){
    console.log("get tasks works");
      return this._http.get(this._url)
      	 .map(res => res.json())
  }

  getPostsByCategory(){
    console.log("get tasks category works");
      return this._http.get(this._categoryUrl)
      	 .map(res => res.json())
  }

}
