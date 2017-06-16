import {
  Component,
  OnDestroy,
  AfterViewInit,
  EventEmitter,
  Input,
  Output
} from '@angular/core';
import 'tinymce';
import 'tinymce/themes/modern';

import 'tinymce/plugins/link';
import 'tinymce/plugins/image';
import 'tinymce/plugins/paste';
import 'tinymce/plugins/code';
import 'tinymce/plugins/imagetools';

declare var tinymce: any;

@Component({
  selector: 'tinymce-editor',
  templateUrl: './tinymce-editor.component.html',
  styleUrls: ['./tinymce-editor.component.scss']
})

export class TinymceEditorComponent implements AfterViewInit, OnDestroy {
  @Input() elementId: String;
  @Input() model: String;
  @Output() content: String;
  // @Output() modelChange: EventEmitter<any> = new EventEmitter<any>();
  

  tinymce = (<any>window).tinymce;
  editor;
  

  ngAfterViewInit() {
    this.tinymce.init({
      selector: '#' + this.elementId,
      plugins: ['link', 'paste', 'image code', 'image imagetools'],
      skin_url: '../../../assets/skins/lightgray',
      skin: "lightgray",
      theme: 'modern',
      statusbar: false,
      height: 602,
      width: 798,
      toolbar: 'undo redo | insert | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | image ',
      insert_button_items: 'image link | inserttable',

      //домены для аплоада картинок
      // imagetools_cors_hosts: ['mydomain.com', 'otherdomain.com'],
      // imagetools_proxy: 'proxy.php',

      setup: editor => {
        this.editor = editor;

        //set current post value to editor before edit
        editor.on('init', () => {
          if (this.model) {
            editor.setContent(this.model);
            console.log("model is " + this.model);
          }
        });

        editor.on('blur', () => {
          //create content variable
          let content = editor.getContent({format : 'text'});
          // this.modelChange.emit(content);
          console.log("new content is " + content);

          // if (this.content) {
          //   // editor.getContent(this.content);
          //   console.log("Editor set content is " + this.content);
          // }
        });
      },

      // setup: editor => {
      //   this.editor = editor;
      //   editor.on('click', () => {
      //     const content = editor.getContent();
      //     this.onEditorKeyup.emit(content);
      //   });
      // },

    });
  }


  ngOnDestroy() {
    tinymce.remove(this.editor);
  }
}


