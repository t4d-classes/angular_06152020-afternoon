import {
  Component, OnInit, Input,
  Output, EventEmitter,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-form',
  templateUrl: './car-form.component.html',
  styleUrls: ['./car-form.component.css']
})
export class CarFormComponent implements OnInit {

  @Input()
  buttonText = 'Submit Car';

  @Output()
  submitCar = new EventEmitter<Car>();

  carForm: FormGroup;

  carColors = [ 'red', 'green', 'blue' ];

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.carForm = this.fb.group({
      make: '', model: '', year: 1900, color: '', price: 0,
    });
  }

  doSubmitCar() {
    this.submitCar.emit({ ...this.carForm.value });
  }
}
