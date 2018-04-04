import { Directive, Input, ElementRef, Renderer2 } from '@angular/core';
import { NgControl } from '@angular/forms';

@Directive({
  selector: '[xevValidate]',
  
})
export class XevValidate {

  constructor(
    private _el: ElementRef,
    private control: NgControl,
    private renderer: Renderer2
  ) {
    
  }

  ngOnInit() {
    var child = document.createElement('div');
    child.innerHTML = '<validation-errors [control]="' + this.control + '" ></validation-errors>';
    var parent = this._el.nativeElement.parentElement;
    this.renderer.appendChild(parent.parentElement, child);
  }
}
    
