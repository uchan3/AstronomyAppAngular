import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Catalog } from '../classes/Catalog';

@Injectable({
  providedIn: 'root'
})


export class CatalogueService {
  
  //Inject the HttpClient. 
  constructor(private http: HttpClient) { }

  private catalogURL = 'api/CatalogList'; //URL
  
  httpOptions = {
    headers: new HttpHeaders(
      {'Content-Type':  'application/json',}
      )};
  
  
  //Methods:

  //GET: all catalog entries. 
  getCatalogList() : Observable<Catalog[]> {
    return this.http.get<Catalog[]>(this.catalogURL);
  };

  //GET: a specific catalog entry by id. 
  //TODO: Refactor to include query parameters. 
  getCatalogEntry(DBID: number) : Observable<Catalog> {
    return this.http.get<Catalog>(`${this.catalogURL}/${DBID}`); //Recall within PostMan, we need to match parameters...
  };

  //POST: add new catalog entry. 
  postCatalogEntry(catalog: Catalog) : Observable<Catalog> {
    return this.http.post<Catalog>(this.catalogURL, catalog, this.httpOptions);
  };

  //PUT: update a specific catalog entry. 
  //TODO: Refactor to include query parameters.
  putCatalogEntry(catalog: Catalog) : Observable<Catalog> {
    return this.http.put<Catalog>(`${this.catalogURL}/${catalog.id}`, catalog, this.httpOptions);
  };

  //DELETE: delete a specific catalog entry. 
  deleteCatalogEntry(DBID: number) : Observable<Catalog> {
    return this.http.delete<Catalog>(`${this.catalogURL}/${DBID}`, this.httpOptions); //Note this method requires httpOptions.
  };
}


