import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { WeatherDetails } from '../common/model/weather-details.model';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit, OnChanges {

  @Input() json:WeatherDetails[] = [];
  modellist: any;
  p =1;
  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    for (let propName in changes) {  
	let change = changes[propName];
    this.modellist=change.previousValue;
        console.log("current object"+change.currentValue);
        console.log("previous object"+change.previousValue);
  }
}

  ngOnInit(): void {
  }

}
