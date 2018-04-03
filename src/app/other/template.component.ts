import { Component, OnInit } from '@angular/core';
import { UserModel } from '../models/user';

@Component({
  selector: 'template-component',
  templateUrl: './template.html'
})

export class TemplateComponent implements OnInit {
  user: UserModel;

  constructor() {
    this.user = new UserModel();
  }

  ngOnInit() {
  }

}
