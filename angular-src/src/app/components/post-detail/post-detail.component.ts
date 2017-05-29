import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { PostService } from '../../services/post.service';
import { Post } from "../../models/post.model";
import * as $ from 'jquery';

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})
export class PostDetailComponent implements OnInit {
  post = new Post();
  posts: any[];

  constructor(private _postService: PostService,
    private route: ActivatedRoute) {
    $(document).ready(function () {
      alert("Hello World");
    });
  }

  ngOnInit(): void {
    const id = +this.route.snapshot.params["id"];

    // this._postService.getPostDetail(id)
    //   .then((post) => { this.post = post; });


    this._postService.getPosts()
      .subscribe(posts => this.posts = posts);


    this.route.snapshot.params["id"];
  }



}
