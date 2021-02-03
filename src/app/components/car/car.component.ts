import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  @Input() carInput: Car;

  car: Car;
  check: boolean = true;

  constructor(private carService: CarServiceService, private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}
