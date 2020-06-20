import { Component, Input, Output, EventEmitter } from '@angular/core';

import { ICar } from '../models/ICar';

@Component({
  selector: '.app-car-view-row',
  template: '',
})
export class FakeCarViewRowComponent {

  @Input()
  car: ICar;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();
}

@Component({
  selector: '.app-car-edit-row',
  template: '',
})
export class FakeCarEditRowComponent {

  @Input()
  car: ICar;

  @Output()
  saveCar = new EventEmitter<ICar>();

  @Output()
  cancelCar = new EventEmitter<void>();
}