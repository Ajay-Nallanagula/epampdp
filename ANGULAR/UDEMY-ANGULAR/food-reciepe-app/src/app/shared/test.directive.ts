import {
  Directive,
  ElementRef,
  HostBinding,
  HostListener,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appTest]',
})
export class TestDirective {
  @HostBinding('style.backgroundColor') backgroundColor: string;

  @Input('defaultColor') defaultColor: string = 'blue';
  @Input('someObj') someObj:Object

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    //This is a bettere way to work with html elements inside directive , but there is another robust way
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background',
    //   'yellow'
    // );
    console.log(this.someObj)
    this.backgroundColor = this.defaultColor;
  }

  //#region Listen to events on elements where Directive is used
  @HostListener('mouseenter') mouseenter() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background',
    //   'green'
    // );
    this.backgroundColor = 'green';
  }

  @HostListener('mouseleave') mouseleave() {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   'background',
    //   'yellow'
    // );
    this.backgroundColor = 'yellow';
  }

  //#endregion
}
