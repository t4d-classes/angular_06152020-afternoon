import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  headerText = 'Car Tool';

  someInput = new FormControl('');

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
  ];

  doAddCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  }

  doDeleteCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);

    // this.cars.splice(
    //   this.cars.findIndex(c => c.id === carId),
    //   1,
    //   { id: 3, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
    // );
    // console.log(this.cars);
  }

}
