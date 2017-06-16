import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { Post } from '../models/post.model';

@Injectable()
export class PostService {
  private _url = "http://localhost:3000/admin/posts";
  private _idUrl = "http://localhost:3000/admin/posts/any";
  private _createUrl = "http://localhost:3000/admin/addpost";
  urlParams;
  id;

  constructor(private _http: Http) {}



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

  getPostById(id: number) {
    let headers = new Headers();
    headers.append("Content-Type", "application/json");

    return this._http.get(this._idUrl + "/" + id, {
      headers: headers
    })
      .toPromise()
      .then((res: Response) => {
        let data = res.json(); 
        console.log(data);       
        let post = new Post();
        
        post.id = data[0].id;
        post.title = data[0].title;
        post.content = data[0].content;
        post.titleImage = data[0].titleImage;
        post.date = data[0].date;
        post.tags = data[0].tags;

        // post.tags = data.tags.forEach((eachTag) => {
        //   post.tags.push({
        //     tag: eachTag.tags + ", ",
        //   });
        // });

        return post;
      })
      // .catch(this.handleError);
  }



  updatePost(post: Post){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });  
    //detalise here post values to specify content
    let data = JSON.stringify(post);
    console.log("updated post body "+data);

    return this._http.put(this._idUrl + "/" + post.id, data, options)
          .map((res) => res.json());

  }



   addPost(post: Post){
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });  
    //detalise here post values to specify content
    let data = JSON.stringify(post);
    console.log("created post body "+data + "to url "+this._createUrl);

    return this._http.post(this._createUrl, data, options)
          .map((res) => res.json());
  }


  deletePost(id: number) {
    return this._http.delete(this._idUrl + "/" + id);
  }

}

  //get current post url
  // private getPostUrl(postId){
	// 	return this._url + "/" + postId;
	// }


  // //update post in db
  // updatePost(post: Post) {
  //   return this._http.put(this.getPostUrl(post.id), JSON.stringify(post))
  //     .map(res => res.json());
  // }

  // updatePostContent(post){
  //   //how to get post.content?
  // }

  



  // private handleError (error: Response | any) {
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

  // getPostById(id) {
  //   return this._http.get(this._url + "/" + id)
  //     .map(res => res.json());
  // }



