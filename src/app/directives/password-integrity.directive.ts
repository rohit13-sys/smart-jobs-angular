import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appPasswordIntegrity]',
  providers : [{provide: NG_VALIDATORS,useExisting:PasswordIntegrityDirective,multi: true}]
})
export class PasswordIntegrityDirective implements Validator{

  @Input('appPasswordIntegrity')
  passwordIntegrity: string=''

  constructor() { }

  validate(control: AbstractControl): ValidationErrors | null {
    return this.passwordIntegrity?passwordIntegrityValidator(new RegExp(this.passwordIntegrity,'g'))(control):null
  }

}
export function passwordIntegrityValidator(pattern:RegExp):ValidatorFn {
  return (control:AbstractControl):ValidationErrors | null => {
    if(!pattern.test(control.value)){
      return {'passwordIntegrity':true}
    }
    return null
  }
}