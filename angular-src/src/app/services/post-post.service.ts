// import { Injectable } from "@angular/core";
// import { Http, Headers, Response } from "@angular/http";
// import "rxjs/add/operator/toPromise";
// import { Post } from "../models/post.model";



// @Injectable()
// export class PostPostService {
//   constructor(private _http: Http) { }

//   list() {
//     let headers = new Headers();
//     headers.append("Content-Type", "application/json");

//     return this._http.get("http://pokeapi.co/api/v2/pokedex/2/", {
//       headers: headers
//     })
//     .toPromise()
//     .then((res: Response) => {
//       let data = res.json();
//       let allPosts = [];

//       data.post_entries.forEach((entry) => {
//         let post = new Post();
//         post.title = entry.title;
//         post.id = entry.id;
//         allPosts.push(post);
//       });

//       return allPosts;
//     })
//     .catch(this.handleError);
//   }

//   private handleError (error: Response | any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || "";
//       const err = body.error || JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Promise.reject(errMsg);
//   }
// }