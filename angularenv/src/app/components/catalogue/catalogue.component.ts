import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/classes/Catalog';

//TODO: Separate Post from Catalog
import { Post } from 'src/app/classes/Post';

//Testing Data
import { CatalogList } from 'src/app/testData/CatalogList';
import { PostList } from 'src/app/testData/PostList';
import { CatalogueService } from 'src/app/services/catalogue.service';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  catalogList: Catalog [];
  catalogEntry: Catalog;
  catalogStatus: boolean = false;
  //postList= PostList;
  
  constructor(private catalogService: CatalogueService) { }

  ngOnInit() {
    this.getCatalog(); //Load Catalog List. 
    //this.getCatalogEntry(name);
  }

  //Catalog Service Methods:
  
  //Get Catalog List
  getCatalog(): void {
    this.catalogService.getCatalogList().subscribe(catalogList => this.catalogList = catalogList);
  };

  //Get specific catalog entry by id. 
  //TODO: Address console error --> unable to get property ID
  //Try getting an entry by name -->Works. But, need to find way to display. 
  getCatalogEntry(catalogName: string): void {
    //let id: number = this.catalogList.findIndex( entry => entry.Name == catalogName) + 1; //Add 1 to map to collection. 
    //console.log(id);
    this.catalogService.getCatalogEntry(catalogName).subscribe(entry => {
      this.catalogEntry = entry;

      this.catalogStatus = true;
      console.log(this.catalogEntry);
    });
    //console.log(this.catalogEntry.id);
    //console.log(this.catalogEntry.Name);
  };

  //Add new catalog
  addCatalog(catalogId: string, catalogName: string): void {
    let newcatalog: Catalog = 
    {
      CatalogId: catalogId,
      Name: catalogName, 
      DateCreated: new Date().toString(), //Get the date value.     
      DateModified: new Date().toString(),    
      id: this.catalogList.length + 1 //Generate new ID within database
    };

    console.log(newcatalog);
    this.catalogService.postCatalogEntry(newcatalog).subscribe(catalog => {this.catalogList.push(catalog)});
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
