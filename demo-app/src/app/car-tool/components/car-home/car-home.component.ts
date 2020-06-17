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

  doDeleteCar(carId: number) {
    this.cars = this.carsSvc.removeCar(carId).allCars();


    // this.cars.splice(
    //   this.cars.findIndex(c => c.id === carId),
    //   1,
    //   { id: 3, make: 'Tesla', model: 'S', year: 2019, color: 'red', price: 120000 },
    // );
    // console.log(this.cars);
  }

}
