import { Component, OnInit } from '@angular/core';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'app-application',
  templateUrl: './application.html',
  styleUrls: []
})
export class ApplicationComponent implements OnInit {
  applicant: Applicant;
  constructor() {
    this.applicant = new Applicant();
  }

  ngOnInit() {
  }


  addApplicant(): void {
    if (this.applicant.form.valid) {
      if (this.applicant.personalInfo.FirstName === "test") {
        this.applicant.setError('personalInfo.FirstName', 'uniqueName', true);        
        return;
      }
      console.log('submit');
    }
    else {
      this.applicant.highlightErrors(this.applicant.form, true);
    }
  }

  updateApplicant(): void{
    this.applicant.personalInfo.FirstName = 'new name';
    this.applicant.personalInfo.EmailAddress = 'newEmail@email.com';
    this.applicant.addressInfo.Address1 = 'new address 1';
    this.applicant.addressInfo.City = 'new city';
    this.applicant.updateForm();
  }

  validatePromoCode(): void {
    this.applicant.clearError('promoCode');
    if (this.applicant.form.get('promoCode').valid) {
      if (this.applicant.promoCode !== "NEWAPP") {
        this.applicant.setError('promoCode', 'invalidPromoCode', true);
      }
    }
  }
}
