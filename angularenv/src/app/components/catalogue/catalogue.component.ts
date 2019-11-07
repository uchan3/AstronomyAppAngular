import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/classes/Catalog';
import { CatalogList } from 'src/app/testData/CatalogList';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {
  
  catalog: Catalog = {
    id: 'NGC 1976', 
    name: 'Orion Nebula'
  }

  catalogList= CatalogList;
  
  constructor() { }

  ngOnInit() {
  }

  add(catalogId: string, catalogName: string): void 
  {
    var newcatalog: Catalog = 
    {
      id: catalogId,
      name: catalogName
    }
    console.log(catalogId);
    console.log(catalogName);

    this.catalogList.push(newcatalog);
  }

  delete(catalogId:string): void
  {
    //this.catalogList.find(function())
    this.catalogList.filter(function(catalogEntry)
    {
      catalogEntry.id = catalogId
    });
      //c => c.id !=catalogId);
  }

}
