import { Component, OnInit } from '@angular/core';
import { WeatherDetails } from '../common/model/weather-details.model';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  weblist: WeatherDetails[] = [];
  constructor() { }

  ngOnInit(): void {
  }

  locationData(json: any){
    for(let item of json.list)
		{
				let fav=new WeatherDetails(json.city.id,json.city.name,item.dt_txt,item.main.humidity,item.main.temp,item.main.pressure,item.wind.speed,item.weather[0].description,item.weather[0].icon,"new");
				this.weblist.push(fav);
		}
		this.weblist=[];
  }

}
