import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user : User = {
    firstName: '',
    lastName: '',
    email:''
};
  users: User[];
  loaded: boolean = false;
  showExtended: boolean = true;
  enableAdd: boolean = true;
  showUserForm : boolean = false;
 

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName: 'david',
        lastName: 'david',
        email:'manar@gmail.com',

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
        hide : true
      },
      {
        firstName: 'manar',
        lastName: 'manar',
       email : 'test@gmail.com',

        registered: new Date('07/02/2018 08:30:00'),
        hide : true
      },
      {
        firstName: 'david',
        lastName: 'david',
        email:'adr@gmail.com',
        isActive: true,

        registered: new Date('01/05/2018 10:30:00'),
        hide : true
      }];
    this.loaded = true;
    
    
  }

  // addUser() {
  //   this.user.isActive = true;
  //   this.user.registered = new Date ();
  //   this.users.unshift(this.user);
  //   this.user = {
  //     firstName: '',
  //   lastName: '',
  //  email : ''

  //   }
  // }



  onSubmit(){
    
  }
  
}