import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../models/post.model";
import { TinymceEditorComponent } from '../tinymce-editor/tinymce-editor.component';
import { Observable } from 'rxjs/Rx';


@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})

export class CreatePostComponent implements OnInit {
  post = new Post();
  @ViewChild(TinymceEditorComponent)
  postNewContent: TinymceEditorComponent;
  value;
  public posts;


  constructor( private _postService: PostService,
               private activatedRoute: ActivatedRoute) {

  }

  //new input values when edit
  update(value: string) {
    this.value = value;
  }

  //get new post content
  saveEditedPostContent() {
    let updatedContent = this.postNewContent.editor.getContent();
    console.log("fired on click " + updatedContent);
    // this.post.content = updatedContent;
  }


  addPost(data) {
    console.log("this is created bodyof post " + data.title);
    this._postService.addPost(data).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Post creation Complete')
    );
  }


  ngOnInit() {}

}

