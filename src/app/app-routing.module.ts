import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from "@angular/common";
import { CarsComponent } from './cars/cars.component';
import { CarComponent } from './car/car.component';

const routes: Routes = [
  {path: "cars", component: CarsComponent},
  {path: "car/:id", component: CarComponent}
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
