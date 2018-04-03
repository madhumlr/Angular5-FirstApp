import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'apply-address-info',
  templateUrl: './address.info.html',
  styleUrls: []
})
export class AddressInfoComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor() { }

  ngOnInit() {
  }

}
