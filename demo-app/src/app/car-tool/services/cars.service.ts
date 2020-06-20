import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Car } from '../models/Car';

@Injectable({
  providedIn: 'root'
})
export class CarsService {

  constructor(private httpClient: HttpClient) { }

  allCars() {
    return this
      .httpClient
      .get<Car[]>(
        'http://localhost:3060/cars',
      );
  }

  appendCar(car: Car) {
    return this
      .httpClient
      .post<Car>(
        'http://localhost:3060/cars',
        car,
      );
  }

  replaceCar(car: Car) {
    return this
      .httpClient
      .put<Car>(
        `http://localhost:3060/cars/${encodeURIComponent(car.id)}`,
        car,
      );
  }

  removeCar(carId: number) {
    return this
      .httpClient
      .delete<void>(
        `http://localhost:3060/cars/${encodeURIComponent(carId)}`,
      );
  }

}
