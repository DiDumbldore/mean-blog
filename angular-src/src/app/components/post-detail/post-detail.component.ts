import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from '../../services/post.service';
import { Post } from "../../models/post.model";

import 'summernote';
import * as $ from 'jquery';
declare var jQuery: any;
declare var summernote: any;



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
  post = new Post();
  posts: any[];
  summernote: any;
  // postText: string = "";
  // errorMessage: string;
  // postSaved: boolean = false;


  constructor(private _postService: PostService,
    private route: ActivatedRoute) {

    // $(document).ready(function () {
    //   alert("Hello World");
    // });


  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    // this._postService.getPostDetail(id)
    //   .then((post) => { this.post = post; });


    this._postService.getPosts()
      .subscribe(posts => this.posts = posts);


    this.route.snapshot.params["id"];

    // $ init summernote
    $('#summernote').summernote();

    var edit = function () {
      $('#summernote').summernote({ focus: true });
    };

    var save = function () {
      var makrup = $('#summernote').summernote('code');
      $('#summernote').summernote('destroy');
    };

    // on submit method
    // savePost(event) {
    //   let text = $('#summernote').summernote('code');
    //   console.log(text);
    //   if (text != null && text != '') {
    //     this.postText = text;
    //     this.postSaved = true;
    //     setTimeout(() => this.postSaved = false, 2000);
    //   }
    //   else {
    //     console.error("posts empty");
    //     this.postSaved = false;
    //   }
    // }
  }



}
