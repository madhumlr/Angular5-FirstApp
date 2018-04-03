import { Component, OnInit, Input } from '@angular/core';
import { Applicant } from '../models/applicant';

@Component({
  selector: 'apply-personal-info',
  templateUrl: './personal.info.html',
  styleUrls: []
})
export class PersonalInfoComponent implements OnInit {
  @Input() applicant: Applicant;
  constructor() {
    
  }

  ngOnInit() {
  }

}
