import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Injectable } from '@angular/core';

//Entity models for Database 
import { User } from 'src/app/classes/User'; 
import { Catalog } from '../classes/Catalog';
import { Post } from '../classes/Post';
import { GeneratedFile } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class AstronomyDBService  implements InMemoryDbService {

  constructor() { }

  createDb()
  {
    let UserList: User[] = 
    [
      {UserID: 'User1', LastName: 'Doe', FirstName: 'John', DateCreated: '8/1/2016', DateModified: ''}, 
      {UserID: 'User2', LastName: 'Cheung', FirstName: 'Liu', DateCreated: '9/1/2016', DateModified: ''}, 
      {UserID: 'User3', LastName: 'Sanchez', FirstName: 'Maria', DateCreated: '10/1/2016', DateModified: ''}, 
    ];

    let CatalogList =
    [
      {id: 1, CatalogId: 'NGC 5194', Name: 'WhirlPool Galaxy', DateCreated: '5/1/2019', DateModified: ''}, 
      {id: 2, CatalogId: 'NGC 1976', Name: 'Orion Nebula', DateCreated: '5/1/2019', DateModified: ''}
    ];

    let PostList: Post[] = 
    [
      {id: 1, PostId: 'P1', title: 'WhirlPool Galaxy by NASA', description: 'Located within constellation Canes Venatici', 
      url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/m51-and-companion_0.jpg', 
      UserId: 'User2', CatalogId: 'NGC 5194'}, 
      {id: 2, PostId: 'P2', title: 'Orion Nebula by NASA', description: 'Located within constellation Orion', 
      url: 'https://www.nasa.gov/sites/default/files/thumbnails/image/orion-nebula-xlarge_web.jpg', 
      UserId: 'User3', CatalogId: 'NGC 1976'}, 
      {id: 3, PostId: 'P3', title: 'Orion Nebula', description: 'Located within constellation Orion, Taken by Marian McGaffney', 
      url: 'https://en.es-static.us/upl/2012/11/Orion-belt-nebula-Mrian-McGaffney-12-6-2013.jpg', 
      UserId: 'User1', CatalogId: 'NGC 1976'}, 
      {id: 4, PostId: 'P4', title: 'WhirlPool Galaxy', description: 'Located within constellation Canes Venatici, Based on video by NASA', 
      url: 'https://cdn.mos.cms.futurecdn.net/raU4GNzSgWBD9ustuBkaL5-650-80.jpg', 
      UserId: 'User2', CatalogId: 'NGC 5194'}, 
    ];
    
    // genId(CatalogList: Catalog[]): number {
    //   return CatalogList.length > 0 ? Math.max(...CatalogList.map(catalog => catalog.DBId)) + 1 : 1;
    // }

    return { UserList, CatalogList, PostList};

  
  }
}
