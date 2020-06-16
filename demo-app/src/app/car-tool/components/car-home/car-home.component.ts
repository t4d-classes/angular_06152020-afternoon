import { Component } from '@angular/core';

import { Car } from '../../models/Car';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent {

  headerText = 'Car Tool';

  cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
  ];


  addCar(car: Car) {
    console.log('add car a');
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
  }

}
