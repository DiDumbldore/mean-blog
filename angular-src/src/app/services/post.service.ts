import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import "rxjs/add/operator/toPromise";
import { Post } from "../models/post.model";

// import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class PostService {
  private _url = "http://localhost:3000/admin/posts";

  constructor(private _http: Http) { }


  getPosts() {
    // var url = this._url;

    // if (filter && filter.category) {
    //   url += "/" + filter.category;
    // }

    console.log("get filtered posts works");
    return this._http.get(this._url)
      .map(res => res.json())
  }

  // private handleError(error: Response | any) {
  //   let errMsg: string;
  //   if (error instanceof Response) {
  //     const body = error.json() || "";
  //     const err = body.error || JSON.stringify(body);
  //     errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
  //   } else {
  //     errMsg = error.message ? error.message : error.toString();
  //   }
  //   console.error(errMsg);
  //   return Promise.reject(errMsg);
  // }

  // getPostDetail(id: number) {
  //   let headers = new Headers();
  //   headers.append("Content-Type", "application/json");

  //   return this._http.get(this._url + id + "/", {
  //     headers: headers
  //   })
  //     .toPromise()
  //     .then((res: Response) => {
  //       let data = res.json();
  //       let post = new Post();
  //       post.title = data.title;
  //       post.id = data.id;

  //       // data.types.forEach((eachType) => {
  //       //   post.types.push(eachType.type.name);
  //       // });

  //       // data.stats.forEach((eachStat) => {
  //       //   post.stats.push({
  //       //     name: eachStat.stat.name,
  //       //     value: eachStat.base_stat
  //       //   });
  //     });

  //   return post;
  // });
      
  //     .catch(this.handleError);
//}

  // getPosts() {

  //   let params = new URLSearchParams();
  //   // params.set('category', 'Статьи');
  //   // params.set('callback', "ng_jsonp.__req0.finished");
  //   params.set('callback', 'JSONP_CALLBACK');

  //   return this.jsonp
  //     .get(this._url)
  //       .map(res => res.json());
  // }

}


