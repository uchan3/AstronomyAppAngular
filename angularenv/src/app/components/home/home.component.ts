import { Component, OnInit } from '@angular/core';
import { APODService } from 'src/app/services/apod.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private apodService: APODService ) { }

  APODTitle: string;
  APODDate: string;
  APODURL: string;
  APODDesc: string;
  ngOnInit() {
    this.getPicture(); //Load picture
  }

  //Get the picture of the day. 
  getPicture() : void {
    this.apodService.getPictureOfDay().subscribe( data => 
      {
        console.log(data)
        this.APODTitle = data['title'];
        this.APODDate = data['date'];
        this.APODURL = data['url'];
        this.APODDesc = data['explanation'];
      });
  }

}
