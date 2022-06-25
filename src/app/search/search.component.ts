import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { WeatherServiceService } from '../common/service/weatherService/weather-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Output() data = new EventEmitter<any>();
  searchText = '';

  constructor(private weatherService: WeatherServiceService) { }

  ngOnInit(): void {
  }

  getWeather(){
    this.weatherService.getData(this.searchText).subscribe((res) => {
      this.data.emit(res);
    });
  }

}
