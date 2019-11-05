import { Component, OnInit } from '@angular/core';
import { APODService } from '../apod.service';

@Component({
  selector: 'app-apod',
  templateUrl: './apod.component.html',
  styleUrls: ['./apod.component.css']
})
export class APODComponent implements OnInit {

  constructor(private apodservice: APODService) { }
  //Testing Code
  APOD_Date: string;
  APOD_Title: string;
  APOD_URL: string;

  ngOnInit() {
    this.getAPODResult();
  }

  getAPODResult(){
    this.apodservice.getAPOD().subscribe(
      data => {
        console.log(data);
        this.APOD_Date = data['date'];
        this.APOD_Title = data['title'];
        this.APOD_URL = data['url'];
      }, 
      error => {
        error = "Where is my data?";
        console.log(error);
      }
    );
  }
}

