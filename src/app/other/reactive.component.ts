import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'reactive-form-validation',
  templateUrl: './reactive.html'
})

export class ReactiveComponent implements OnInit {
  userForm: FormGroup;
  selectedSstate = '';

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.userForm = this.fb.group({
      name: ['', Validators.required],
      address1: ['', Validators.required],
      street: '',
      city: ['', Validators.required],
      state: '',
      zip: '',
      phoneNumber: '',
    });
  }

  ngOnInit() {
  }

  adduser(): void {
    console.log(this.userForm.valid)
    console.log(this.userForm.get('city').valid)
    //console.log(this.user);
  }

  onStateChanged(selectedState: number) {
    //this.user.state = selectedState;
  }
}
