import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserModel } from '../models/user';

@Component({
  selector: 'user-form',
  templateUrl: './user.html'
})

export class UserComponent implements OnInit {
  user: UserModel;

  constructor() {
    this.user = new UserModel();
  }

  ngOnInit() {
  }

  adduser(): void {
    console.log(this.user.form.valid)
    console.log(this.user.form.get('city').valid)
  }
}
