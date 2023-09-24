import { Directive, ElementRef, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() highlightColor : string = "white" 

  @HostListener('mouseenter') onMouseEnter(){
     this.changeHighlight(this.highlightColor)
  }

  @HostListener('mouseleave') onMouseLeave(){
    this.changeHighlight(null)
  }
  
  constructor( private el : ElementRef){ }
    
  private changeHighlight( color : string | null){
    this.el.nativeElement.style.color = color;
  }
}
