import {
  Component, OnInit, Input, Output,
  EventEmitter, ChangeDetectionStrategy
} from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-table-wrapper',
  templateUrl: './car-table-wrapper.component.html',
  styleUrls: ['./car-table-wrapper.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CarTableWrapperComponent implements OnInit {

  @Input()
  cars: Car[] = [];

  @Output()
  deleteCar = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  doDeleteCar(carId: number) {
    this.deleteCar.emit(carId);
  }

}
