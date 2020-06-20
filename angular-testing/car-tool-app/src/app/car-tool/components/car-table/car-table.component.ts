import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { ICar } from '../../models/ICar';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit {

  @Input()
  headerText = 'Car Table';

  @Input()
  cars: ICar[] = [];

  @Input()
  editCarId = 0;

  @Output()
  editCar = new EventEmitter<number>();

  @Output()
  deleteCar = new EventEmitter<number>();

  @Output()
  saveCar = new EventEmitter<ICar>();

  @Output()
  cancelCar = new EventEmitter<void>();

  @Output()
  refreshCars = new EventEmitter<void>();

  constructor() { }

  ngOnInit() {
  }

  doEditCar(carId: number) {
    this.editCar.emit(carId);
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

  doSaveCar(car: ICar) {
    this.saveCar.emit(car);
  }

  doCancelCar() {
    this.cancelCar.emit();
  }

  doRefreshCars() {
    this.refreshCars.emit();
  }

}
