import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APODService {

  constructor(private http: HttpClient) { }

  getAPOD(){
    return this.http.get(
      'https://api.nasa.gov/planetary/apod?api_key='); //Removed Key
  }
}
