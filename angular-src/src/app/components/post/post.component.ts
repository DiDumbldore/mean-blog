import { Router, ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PostService } from '../../services/post.service';
import 'rxjs/add/operator/map';
import { Post } from "../../models/post.model";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})

export class PostComponent implements OnInit {
  posts: Post[];
  // @Input() posts: Post[];
  // @Input() selected: Post
  // @Output() selectedChange: EventEmitter<Post> = new EventEmitter();

  constructor(private _postService: PostService,
    private activatedRoute: ActivatedRoute) { }


  private sub: any;      // -> Subscriber
  urlParams: string;

  loadPosts() {
    this._postService.getPosts()
      .subscribe(posts => this.posts = posts);
  }

  ngOnInit() {

    this.sub = this.activatedRoute
      .params
      .subscribe(params => {
        this.urlParams = params["category"]; // --> Name must match wanted paramter
        console.log("params " + this.urlParams);
      });

    //Перенести обе ф в this.sub для динамичного обновления urlParams, может так они будут обновляться
    this._postService.setArrayReference(this.urlParams);

    this.loadPosts();

  }

  deletePost(post: Post) {
    if (confirm("Are you sure you want to delete post with title " + post.title + " ?")) {
      this._postService.deletePost(post.id).subscribe(
        data => this.loadPosts(),
        err => console.log(err),
        () => console.log('Post delete Complete')
      );
    } else {
      return false;
    }
  }



  //on change in category component 
  // this._postService.getPosts()
  //     .subscribe(posts => this.posts = posts);

}
