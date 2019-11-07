import { Component, OnInit } from '@angular/core';
import { Catalog } from 'src/app/classes/Catalog';

//TODO: Separate Post from Catalog
import { Post } from 'src/app/classes/Post';

//Testing Data
import { CatalogList } from 'src/app/testData/CatalogList';
import { PostList } from 'src/app/testData/PostList';

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
  postList= PostList;
  
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

  //TODO: Refactor delete. 
  delete(catalogId:string): void
  {
    //find the value. 
    let catalogEntry = this.catalogList.find(c => c.id == catalogId);
    
    //get the index.
    let catalogIndex = this.catalogList.indexOf(catalogEntry);
    
    //split the array. 
    this.catalogList.splice(catalogIndex,1);

    //testing purposes
    console.log(catalogIndex);
    console.log(catalogEntry.name);
    
    //doesn't seem to work...  
    //this.catalogList.filter( entry => entry!= catalogEntry);
      //c => c.id !=catalogId);
  }

}
