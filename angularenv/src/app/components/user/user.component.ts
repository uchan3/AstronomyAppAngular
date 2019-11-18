import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/User';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

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

  validateLogIn: boolean = true; 

  //TODO: Refactor log-in with authentication/authorization in future. 
  validateUser(userSignIn: User) {
    //Extract parameters out of the form. 
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
          this.router.navigate(['/catalog']); //Simple work-around for "successful log-in". 
          console.log("Welcome. You have successfully logged in.");
        }
      })
    };
}
