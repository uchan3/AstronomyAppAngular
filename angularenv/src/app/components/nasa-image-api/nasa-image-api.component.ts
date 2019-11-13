import { Component, OnInit, Input } from '@angular/core';
import { NasaImageAPIService } from 'src/app/services/nasa-image-api.service';

@Component({
  selector: 'app-nasa-image-api',
  templateUrl: './nasa-image-api.component.html',
  styleUrls: ['./nasa-image-api.component.css']
})
export class NasaImageAPIComponent implements OnInit {

  constructor(private nasaAPIService: NasaImageAPIService) { }

  ngOnInit() {
    this.getFirstPicture(this.CatalogID);
  }

  @Input() CatalogID: string; //Input from Catalog into NASA Library. 

  //Image URL:
  imageURL: Object;

  //Methods: 

  getFirstPicture(catalogIDINPUT: string): void {
    this.nasaAPIService.getPictureCollection(catalogIDINPUT).subscribe(
      data => 
      {
        console.log(data);
        this.imageURL = data['collection']['items'][0]['links'][0]['href'];
        console.log(this.imageURL);
      }
    )
  }

}
