import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appCapitalize]'
})
export class CapitalizeDirective {

  constructor(private element: ElementRef) { }

  @Input('appCapitalize') format;

  @HostListener('blur') onBlur() {
    let value: string = this.element.nativeElement.value
    this.element.nativeElement.value = this.capitalize(value);
  }

  capitalize(value: string): string {
    
    let words = value.split(' ');
    let sentence = [];

    for (let i = 0; i < words.length; i++) {
      let word = words[i];
      sentence.push(word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase())
    }
    
    let i = 0;

    while (i < sentence.length) {
      if (sentence[i] === "") {
        sentence.splice(i, 1);
        i--;
      }
      i++;
    }
    return sentence.join(' ');
  }


}
