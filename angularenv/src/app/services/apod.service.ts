import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class APODService {

  constructor(private http: HttpClient) { }

  private nasaAPODURL = 'https://api.nasa.gov/planetary/apod';

  //GET: Picture of the day. 
  getPictureOfDay() {
    return this.http.get(this.nasaAPODURL+'?api_key=DEMO_KEY');
  }
}
