import { FormBuilder, FormControl, FormGroup } from "@angular/forms";

export class BaseModel {
  fb: FormBuilder;
  form: FormGroup;

  constructor() {
    this.fb = new FormBuilder();
  }

  public highlightErrors(formGroup: FormGroup): void {
    Object.keys(formGroup.controls).forEach(field => {
      const control = formGroup.get(field);
      if (control instanceof FormControl) {
        control.markAsTouched({ onlySelf: true });
      } else if (control instanceof FormGroup) {
        this.highlightErrors(control);
      }
    });
  }

  public updateForm() {
    this.form.patchValue(this);
  }
}
