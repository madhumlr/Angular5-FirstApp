import { Component, OnInit } from '@angular/core';
import { DriverModel } from '../models/driver.model';

@Component({
  selector: 'driver-component',
  templateUrl: './driver.html'
})

export class DriverComponent implements OnInit {
  driver: DriverModel;

  constructor() {
    this.driver = new DriverModel();
  }

  ngOnInit() {
  }

}
