import { Directive, Renderer2, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  el: HTMLElement;

  constructor(private renderer: Renderer2, private element: ElementRef) { 
    this.el = element.nativeElement;
  }

  @HostListener('mouseenter')
  onMouseEnter() {
    this.renderer.setStyle(this.el, 'background-color', 'yellow');
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.renderer.setStyle(this.el, 'background-color', 'inherit');
  }

}
