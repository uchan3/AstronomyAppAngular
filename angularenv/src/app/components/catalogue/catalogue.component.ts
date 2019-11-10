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
  //postList= PostList;
  
  constructor(private catalogService: CatalogueService) { }

  ngOnInit() {
    this.getCatalog(); //Needed to load this catalog!!! 
  }

  //Catalog Service Methods:
  
  //Get Catalog List
  getCatalog(): void {
    this.catalogService.getCatalogList().subscribe(catalogList => this.catalogList = catalogList);
  };

  //Get specific catalog entry. 
  //TODO: Address error --> unable to get property ID
  getCatalogEntry(name: number): void {
    this.catalogService.getCatalogEntry(name).subscribe(entry => this.catalogEntry = entry);
    console.log(this.catalogEntry.id);
    console.log(this.catalogEntry.Name);
  };

  //Add new catalog
  addCatalog(catalogId: string, catalogName: string): void {
    let newcatalog: Catalog = 
    {
      CatalogId: catalogId,
      Name: catalogName, 
      DateCreated: Date.now().toString(), //Get the date value.     
      DateModified: Date.now().toString(),
      
      id: this.catalogList.length + 1 //Troubleshooting for in-memory-db
    };

    //console.log(newcatalog.CatalogId); //Testing
    //console.log(newcatalog.DateCreated);
    //console.log(newcatalog.DateModified);
    //console.log(newcatalog.Name);
    this.catalogService.postCatalogEntry(newcatalog).subscribe(catalog => {this.catalogList.push(catalog)});
  };

  //Update a catalog entry
  updateCatalog(catalogId: string, catalogName: string): void {
    let updatecatalog = 
    {
      id: this.catalogList.findIndex(update => update.CatalogId == catalogId) +1 , //for mapping to the DB
      CatalogId: catalogId,
      Name: catalogName,
      DateCreated: this.catalogList.find( updateId => updateId.CatalogId == catalogId).DateCreated,
      DateModified: Date.now().toString()
    };

    console.log(updatecatalog);

    this.catalogService.putCatalogEntry(updatecatalog).subscribe(
      updatelist => {this.getCatalog()});
  };

  //TODO: Refactor delete. 
  deleteCatalog(catalogId: string): void {
      let id: number =  this.catalogList.findIndex(deleteEntry => deleteEntry.CatalogId == catalogId) + 1; //Map to DB (adding 1)
      let deleteEntry: Catalog = this.catalogList.find(dEntry => dEntry.CatalogId == catalogId);
      console.log(id);
      console.log(deleteEntry);
      this.catalogService.deleteCatalogEntry(id).subscribe(
        newlist => { this.getCatalog()});
  }

}
