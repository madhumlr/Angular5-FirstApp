import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class BaseModel {
  fb: FormBuilder;
  form: FormGroup;

  constructor() {
    this.fb = new FormBuilder();
  }

  public highlightErrors(formGroup: FormGroup, canScroll?: boolean): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.highlightErrors(control, canScroll);
      }
    });

    if (canScroll) {
      this.scrollIfInvalid();
    }
  }

  public updateForm() {
    this.form.patchValue(this);
  }

  public setError(field: string, errorKey: string, canScroll?: boolean) {
    this.form.get(field).setErrors({ [errorKey] : true });
    this.form.get(field).markAsTouched();
    if (canScroll) {
      setTimeout(this.scrollIfInvalid, 200);      
    }
  }

  public clearError(field: string){
    this.form.get(field).setErrors(null);
  }

  public scrollIfInvalid() {
    var inputs = document.querySelectorAll('.form-control.ng-invalid');
    console.log(inputs)
    if (inputs.length > 0)
      inputs[0].scrollIntoView();
  }
}
