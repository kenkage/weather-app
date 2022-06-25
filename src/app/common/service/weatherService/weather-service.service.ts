import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import { catchError, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherServiceService {

  private heroesUrl = 'http://api.openweathermap.org/data/2.5/forecast?appid=e6fcda39d98976a2d7be8f9102bd5fa7&'; 

  constructor(private http: HttpClient) { }

  getData(term: string){
  	return this.http
             .get(`${this.heroesUrl}q=${term}`)
             .pipe(map(res => { return res; }));
  }


}
