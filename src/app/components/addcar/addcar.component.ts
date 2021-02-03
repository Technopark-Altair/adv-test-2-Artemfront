import { Component, OnInit, Output } from '@angular/core';
import { CarComponent } from '../car/car.component';
import { Car } from 'src/models/car.module';


@Component({
  selector: 'app-addcar',
  templateUrl: './addcar.component.html',
  styleUrls: ['./addcar.component.css']
})
export class AddcarComponent implements OnInit {
  car: CarComponent;
  @Output () addNewCar = new EventEmitter<Car>();
  constructor() { }

  ngOnInit(): void {
    this.car = new Car();
  }

  AddCarInArray () {
    this.addNewCar.emit(this.car);
    this.car = new Car();
  }

}
