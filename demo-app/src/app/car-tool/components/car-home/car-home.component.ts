import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

import { Car } from '../../models/Car';
import { CarsService } from '../../services/cars.service';

@Component({
  selector: 'app-car-home',
  templateUrl: './car-home.component.html',
  styleUrls: ['./car-home.component.css']
})
export class CarHomeComponent implements OnInit {

  headerText = 'Car Tool';
  cars: Car[] = [];

  someInput = new FormControl('');

  constructor(private carsSvc: CarsService) { }

  ngOnInit() {
    this.cars = this.carsSvc.allCars();
  }

  doAddCar(car: Car) {
    this.cars = this.carsSvc.appendCar(car).allCars();
  }

  doDeleteFirstCar() {
    // this.cars.splice(0, 1);
    this.cars = this.carsSvc.removeCar(1).allCars();
    console.log(this.cars);
  }

  doDeleteCar(carId: number) {
    this.cars = this.carsSvc.removeCar(carId).allCars();
  }

}
