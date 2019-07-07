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
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
  }
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
        age: 33,
        address: {
          street: 'dd',
          city: 'd',
          state: 'd'
        },

        isActive: true,

        registered: new Date('01/02/2018 08:30:00'),
        hide : true
      },
      {
        firstName: 'manar',
        lastName: 'manar',
        age: 24,
        address: {
          street: 'bd',
          city: 'test',
          state: 'casa'
        },

        registered: new Date('07/02/2018 08:30:00'),
        hide : true
      },
      {
        firstName: 'david',
        lastName: 'david',
        age: 33,
        address: {
          street: 'dd',
          city: 'd',
          state: 'd'
        },

        isActive: true,

        registered: new Date('01/05/2018 10:30:00'),
        hide : true
      }];
    this.loaded = true;
    
    
  }

  addUser() {
    this.user.isActive = true;
    this.user.registered = new Date ();
    this.users.unshift(this.user);
    this.user = {
      firstName: '',
    lastName: '',
    age: null,
    address: {
      street: '',
      city: '',
      state: ''
  }

    }
  }

  fireEvent(e){
    // console.log('button clicked..');
    console.log(e);
  }
  // toogleHide(user){
  //   user.hide = !user.hide;

  // }

  onSubmit(e){
    console.log("test envoie...");
  }
  
}