import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  showValidationSummary = false;

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<Car>();

  carForm: FormGroup;

  carColors = [ 'red', 'green', 'blue' ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: [ '', Validators.required ],
      model: '',
      year: 1900,
      color: '',
      price: 0,
    });
  }

  doSubmitCar() {

    // const makeControl = this.carForm.get('make');
    // if (makeControl.value) {

    if (this.carForm.valid) {

      this.showValidationSummary = false;

      this.submitCar.emit({
        ...this.carForm.value,
      });

      // make input fields blank
      this.carForm.reset();

      // use the desired initial values
      this.carForm.setValue({
        make: '',
        model: '',
        year: 1900,
        color: '',
        price: 0,
      });
    } else {
      this.showValidationSummary = true;
    }
  }


}
