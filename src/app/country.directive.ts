import {Directive, ElementRef, HostBinding, HostListener} from '@angular/core';

@Directive({
  selector: 'path'
})
export class CountryDirective {

  @HostBinding('style.fill')
  fill = 'lightgrey';

 constructor(private element: ElementRef) {}

  @HostListener('click')
  clicked() {
   debugger;
    alert(this.element.nativeElement.attributes['data-name'].value);
    if (this.fill == 'lightgrey')
      this.fill = 'steelblue';
    else
      this.fill = 'lightgrey';
  }
}
