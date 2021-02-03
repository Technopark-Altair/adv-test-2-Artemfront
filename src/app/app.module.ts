import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { AddcarComponent } from './components/addcar/addcar.component';
import { CarsComponent } from './components/cars/cars.component';
import { CarServicesComponent } from './components/car-services/car-services.component';
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";


@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    AddcarComponent,
    CarsComponent,
    CarServicesComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
