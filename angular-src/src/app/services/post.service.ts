import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {
  private _url = "http://localhost:3000/admin/posts";
  urlParams;

  constructor(private _http: Http) { }

  setArrayReference(ref) {
    this.urlParams = ref;
  }

  getPosts() {
    var url = this._url;

    //load all posts
    if (typeof this.urlParams == "undefined") {
      return this._http.get(this._url)
        .map(res => res.json());
    } else {

      //load posts with selected category
      url += "/" + this.urlParams;
      return this._http.get(url)
        .map(res => res.json());
    }
  }
}


