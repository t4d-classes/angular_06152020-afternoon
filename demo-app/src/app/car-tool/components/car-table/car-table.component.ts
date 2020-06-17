import {
  Component, OnInit, Input, Output, EventEmitter, DoCheck
} from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-table',
  templateUrl: './car-table.component.html',
  styleUrls: ['./car-table.component.css']
})
export class CarTableComponent implements OnInit, DoCheck {

  @Input()
  cars: Car[] = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngDoCheck() {
    console.log('running change detection');
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}
