import { Component, ElementRef, OnInit } from '@angular/core';

declare var jQuery: any;

@Component({
    selector: 'my-croppic',
    template: `<div id="yourId"></div>`
})
export class CroppicComponent implements OnInit {
    Croppic: any;

    elementRef: ElementRef;
    constructor(elementRef: ElementRef) {
        this.elementRef = elementRef;
    }
    ngOnInit() {
        // jQuery(this.elementRef.nativeElement).find('#yourId').draggable({ containment: '#yourId' });
        var cropperHeader = new this.Croppic('yourId');
    }
}