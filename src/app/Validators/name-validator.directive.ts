
import { Directive, Input } from '@angular/core';
import { Validator, AbstractControl, NG_VALIDATORS, ValidatorFn } from '@angular/forms';

export function forbiddenNameValidator(name: RegExp) : ValidatorFn {
  return (control: AbstractControl): {[key:string]: any} | null => {
    const forbidden = name.test(control.value);
    return forbidden ? {'forbiddenName': {value: control.value}} : null
  };
}

@Directive({
  selector: '[appNameValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: NameValidatorDirective, multi: true}]
})
export class NameValidatorDirective implements Validator {

  @Input('appNameValidator') forbiddenName: string;

  constructor() { }

  validate(control: AbstractControl) : {[key: string] : any} | null {
    return this.forbiddenName ? forbiddenNameValidator(new RegExp(this.forbiddenName, 'i'))(control) : null
  }

}
