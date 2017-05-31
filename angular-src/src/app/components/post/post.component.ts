import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/post.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  posts: any[];

  constructor(private _postService: PostService,
              private activatedRoute: ActivatedRoute) { }


  private sub: any;      // -> Subscriber
  urlParams: string;

  ngOnInit() {

    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.urlParams = params["category"]; // --> Name must match wanted paramter
        console.log("params " + this.urlParams);
      });
      

    this._postService.setArrayReference(this.urlParams);

    this._postService.getPosts()
      .subscribe(posts => this.posts = posts);

  }

}
