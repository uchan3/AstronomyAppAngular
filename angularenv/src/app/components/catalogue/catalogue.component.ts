import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/classes/Catalog';

import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'], 
})
export class CatalogueComponent implements OnInit {
  
  catalogList: Catalog [];
  
  //Catalog Entry Form
  catalogEntry: Catalog =
  {
    id: null, 
    CatalogId: null, 
    Name: null, 
    DateCreated: null, 
    DateModified: null
  };
  
  catalogStatus: boolean = false;
  
  constructor(private catalogService: CatalogueService) { }

  ngOnInit() {
    this.getCatalog(); //Load Catalog List. 
  }

  //Catalog Service Methods:
  //TODO: Refactor CRUD operations with forms. 
  
  //Get Catalog List
  getCatalog(): void {
    this.catalogService.getCatalogList().subscribe(catalogList => this.catalogList = catalogList);
  };

  //Get specific catalog entry by id. 
  //Try getting an entry by name -->Works. But, need to find way to display. 
  //Solution: Response was in the form of an array. So, needed to display first element. 
  getCatalogEntry(catalogName: string): void {
    this.catalogService.getCatalogEntry(catalogName).subscribe(entry => {
      this.catalogEntry = entry;
      
      if (Object.keys(this.catalogEntry).length ==0)
      {
        this.catalogStatus = false;
        console.log("Where is the data?");
      }
      else
      {
        this.catalogStatus = true;
        //console.log(this.catalogEntry);
      }
      
    });
  };

  //Add new catalog
  addCatalog(newCatalogEntry: Catalog): void {

    //Filling in the rest of the form. 
    newCatalogEntry.DateCreated = new Date().toString();
    newCatalogEntry.DateModified = new Date().toString();
    newCatalogEntry.id = this.catalogList.length + 1;

    //console.log(newCatalogEntry);
    this.catalogService.postCatalogEntry(newCatalogEntry).subscribe(catalog => {this.catalogList.push(catalog)});
  };

  //Update a catalog entry based on Catalog ID and Name. 
  updateCatalog(catalogId: string, catalogName: string): void {
    let updatecatalog = 
    {
      id: this.catalogList.findIndex(update => update.CatalogId == catalogId) +1 , //Map to DB collection.
      CatalogId: catalogId,
      Name: catalogName,
      DateCreated: this.catalogList.find( updateId => updateId.CatalogId == catalogId).DateCreated,
      DateModified: new Date().toString()
    };

    console.log(updatecatalog);

    this.catalogService.putCatalogEntry(updatecatalog).subscribe(updatelist => {this.getCatalog()}); //Subscribe to updated list.
  };

  //TODO: Refactor delete. 
  deleteCatalog(catalogId: string): void {
      let id: number =  this.catalogList.findIndex(deleteEntry => deleteEntry.CatalogId == catalogId) + 1; //Map to DB (adding 1)
      let deleteEntry: Catalog = this.catalogList[id];
      console.log(id);
      console.log(deleteEntry);
      this.catalogService.deleteCatalogEntry(id).subscribe( newlist => { this.getCatalog()});
  }

}
