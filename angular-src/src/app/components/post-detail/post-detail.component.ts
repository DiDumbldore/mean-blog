import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { PostService } from '../../services/post.service';
import { ActivatedRoute } from "@angular/router";
import { Post } from "../../models/post.model";
import { TinymceEditorComponent } from '../tinymce-editor/tinymce-editor.component';
import { Observable } from 'rxjs/Rx';
// import debouce from 'lodash-es/debounce';


// import 'summernote';
// import * as $ from 'jquery';
// declare var jQuery: any;
// declare var summernote: any;



@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss']
})

export class PostDetailComponent implements OnInit {
  post = new Post();
  @ViewChild(TinymceEditorComponent)
  postNewContent: TinymceEditorComponent;
  value;
  public posts;
  

  // postTitleValue = '';
  // postDateValue = '';

  // summernote: any;
  // postText: string = "";
  // errorMessage: string;
  // postSaved: boolean = false;




  constructor(private _postService: PostService,
    private activatedRoute: ActivatedRoute) {

    // $(document).ready(function () {
    //   alert("Hello World");
    // });

  }


  //update input values when edit
  update(value: string) {
    this.value = value;
    // this.postTitle.value = this.postTitle.value;
    // this.postDate.value = this.postDate.value;
  }


  //get updated post content
  // saveEditedPostContent() {
  //   let updatedContent = this.postNewContent.editor.getContent();
  //   console.log("fired on click " + updatedContent);
  //   // this.post.content = updatedContent;
  // }

  //shorten content for shortContent to 300
  // str = this.postNewContent.editor.getContent();
  // str.replace(/^(.{11}[^\s]*).*/, "$1"); 


  updatePost(data) {
    data.content = this.postNewContent.editor.getContent({format : 'text'});
    data.shortContent = data.content.replace(/^(.{220}[^\s]*).*/, "$1") + "..."; 
    console.log("this is posted bodyof post " + data.shortContent);

    this._postService.updatePost(data).subscribe(
      data => console.log(data),
      err => console.log(err),
      () => console.log('Post update Complete')
    );
  }



  ngOnInit() {
    const id = +this.activatedRoute.snapshot.params["id"];
    console.log(id);



    this._postService.getPostById(id)
      .then((post) => { this.post = post; });
    console.log("post title " + this.post.title);
  }
}

  //   newPostData = [
  //     postTitle.value = this.post.title,
  //     this.postDate.value = this.post.date,
  //  ];

  //  showNewPostData(){
  //    console.log("Update: new post data " + this.newPostData);
  //  }




  // savePostChanges(){
  //   var result;

  //   result = this._postService.updatePost(this.post);
  //   //все еще старый
  //   console.log(this.post);

  // }








  // public doSomething(content):void {
  //     console.log('Picked content: ', content);
  // }

  // public saveContent(content: any): void {
  //   // this.modelChange.emit(content);
  //    console.log('Picked content: ', content);
  // }





    // $ init summernote
    // $('#summernote').summernote();

    // var edit = function () {
    //   $('#summernote').summernote({ focus: true });
    // };

    // var save = function () {
    //   var makrup = $('#summernote').summernote('code');
    //   $('#summernote').summernote('destroy');
    // };

    // on submit method

// }

 // if (text != null && text != '') {
      //   this.postText = text;
      //   this.postSaved = true;
      //   setTimeout(() => this.postSaved = false, 2000);
      // }
      // else {
      //   console.error("posts empty");
      //   this.postSaved = false;
      // }