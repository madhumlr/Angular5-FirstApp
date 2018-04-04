// validation-errors.ts
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
  selector: 'validation-errors',
  templateUrl: './validation.errors.html'
})
export class ValidationErrorsComponent {

  private static readonly errorMessages = {
    'required': () => 'Required',
    'minlength': (params) => 'The min number of characters is ' + params.requiredLength,
    'maxlength': (params) => 'The max allowed number of characters is ' + params.requiredLength,
    'pattern': (params) => 'The required pattern is: ' + params.requiredPattern,
    'years': (params) => params.message,
    'countryCity': (params) => params.message,
    'uniqueName': (params) => 'Name should be Unique',
    'telephoneNumbers': (params) => params.message,
    'telephoneNumber': (params) => params.message,
    'invalidPromoCode': (params) => 'You have entered invalid Promo Code'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    if (!this.control.errors) return null;
    var errorsList = Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
    return errorsList;
  }

  private getMessage(type: string, params: any) {
    return ValidationErrorsComponent.errorMessages[type](params);
  }

}
