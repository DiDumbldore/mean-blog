import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _url = "http://localhost:3000/admin/posts";

  constructor(private _http: Http) { }


  getPosts(filter?){
    var url = this._url;

    if (filter && filter.category) {
      url += "/" + filter.category;
    }

    console.log("get filtered posts works");
      return this._http.get(url)
      	 .map(res => res.json())
  }

}


