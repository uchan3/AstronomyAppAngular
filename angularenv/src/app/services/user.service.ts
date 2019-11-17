import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../classes/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  
  private UserURl = 'api/UserList';

  //GET: Validate a specific user by UserID, First Name, and Last Name. 
  getUser(UserID: string, firstName: string, lastName: string ) : Observable<User> {
    return this.http.get<User>(`${this.UserURl}?UserID=${UserID}&FirstName=${firstName}&LastName=${lastName}`);
  }
}
