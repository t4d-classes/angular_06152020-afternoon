import { Injectable } from '@angular/core';

import { Car } from '../models/Car';

// allow other services to be injected into CarsService
@Injectable(

// metadata configuration
{
  providedIn: 'root'
})
export class CarsService {

  private cars: Car[] = [
    { id: 1, make: 'Ford', model: 'Fusion Hybrid', year: 2020, color: 'blue', price: 45000 },
    { id: 2, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
  ];

  // list other services in the constructor because of @Injectable
  constructor() { }

  allCars() {
    return this.cars.concat();
  }

  appendCar(car: Car) {
    this.cars = this.cars.concat({
      ...car,
      id: Math.max(...this.cars.map(c => c.id), 0) + 1,
    });
    return this;
  }

  removeCar(carId: number) {
    this.cars = this.cars.filter(c => c.id !== carId);
    return this;
  }
}
