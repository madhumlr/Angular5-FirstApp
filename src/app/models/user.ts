import { BaseModel } from "./base.model";
import { Validators, FormBuilder } from "@angular/forms";
import { FormGroup } from "@angular/forms/src/model";

export class UserModel extends BaseModel {
  id: number;
  name: string;
  isDeleted: boolean;
  phoneNumber: string;
  description: string;
  licenceNumber: string;
  address1: string;
  address2: string;
  city: string;
  state: number;
  street: string;
  zip: string;

  constructor() {
    super();
    this.form = this.CreateUserForm();
  }

  private CreateUserForm(): FormGroup {
    return this.fb.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      street: '',
      city: ['', Validators.required],
      state: '',
      zip: '',
      phoneNumber: '',
    });
  }
}
