import { Component, OnInit } from '@angular/core';
import { PostService} from '../../services/post.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  providers: [PostService]
})
export class PostComponent implements OnInit {
  posts: any[];

  constructor(private _service: PostService) { }

  ngOnInit() {
    this._service.getPosts()
 			.subscribe(posts => this.posts = posts);
       
  }

  ngOnCategoryFilter() {
    this._service.getPostsByCategory()
 			.subscribe(posts => this.posts = posts);
  }

}
