import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/User';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  ngOnInit() {
  }
  
  userForm: User =
  {
    id: null, 
    UserID: null, 
    LastName: null, 
    FirstName: null, 
    DateCreated: null, 
    DateModified: null
  };

  validateLogIn: boolean = false; //False to prevent unauthorized login. 

  //Now: User can access platform by correctly logging in. 
  validateUser(userSignIn: User) {
    //Extract parameters out. 
    let userLoginId = userSignIn.UserID;
    let loginFirstName = userSignIn.FirstName;
    let loginLasttName = userSignIn.LastName;
    return this.userService.getUser(userLoginId, loginFirstName, loginLasttName).subscribe(
      user => {this.userForm = user;
        if (Object.keys(this.userForm).length ==0)
        {
          this.validateLogIn = false;
          console.log("There is no such user");
        }
        else
        {
          this.validateLogIn = true;
          console.log("Welcome. You have successfully logged in.");
        }
      })
    };
}
