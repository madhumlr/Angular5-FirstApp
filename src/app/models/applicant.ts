import { BaseModel } from "./base.model";
import { PersonalInfo } from "./personal.info";
import { AddressInfo } from "./address.info";
import { FormGroup, Validators } from "@angular/forms";

export class Applicant extends BaseModel  {
  personalInfo: PersonalInfo;
  addressInfo: AddressInfo;

  constructor() {
    super();
    this.form = this.CreateApplicantForm();
    this.initializeDataBinding();
  }

  private CreateApplicantForm(): FormGroup {
    return this.fb.group({
      personalInfo: this.fb.group({
        FirstName: ['', Validators.required],
        LastName: ['', Validators.required],
        EmailAddress: ['', Validators.required],
        }),
      addressInfo: this.fb.group({
        Address1: ['', Validators.required],
        Address2: '',
        City: ['', Validators.required],
      })
    });
  }


  public initializeDataBinding(): void {
    // initialize stream
    const bindingEvent$ = this.form.valueChanges;

    // subscribe to the stream 
    bindingEvent$.subscribe(x => {
      this.personalInfo = x.personalInfo;
      this.addressInfo = x.addressInfo;
    });
  }
}
