import {
  Component, OnInit, Input, Output,
  EventEmitter, ChangeDetectionStrategy,
  AfterViewChecked,
} from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-table-wrapper',
  templateUrl: './car-table-wrapper.component.html',
  styleUrls: ['./car-table-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableWrapperComponent implements OnInit, AfterViewChecked {

  @Input()
  cars: Car[] = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewChecked(): void {
    console.log('after view checked car-table-wrapper');
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}
