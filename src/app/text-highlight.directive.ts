
import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[textHighlight]'
})

export class TextHighlightDirective implements OnInit {

  constructor(private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'yellow';
  }

}


