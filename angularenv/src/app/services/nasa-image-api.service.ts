import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NasaImageAPIService {

  constructor(private http: HttpClient) { }

  private nasaImageAPIURL = 'https://images-api.nasa.gov/search';

  private mediaTypeParameter = '?media_type=image';

  //GET: Collection of images

  getPictureCollection(keyword: string) {
    return this.http.get(this.nasaImageAPIURL + this.mediaTypeParameter + '&keywords=' + keyword);
  }
}
