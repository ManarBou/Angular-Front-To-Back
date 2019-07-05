import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[];
  loaded: boolean = false;
  showExtended: boolean = false;
  enableAdd: boolean = true;
 

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

        registered: new Date('01/02/2018 08:30:00')
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

        registered: new Date('07/02/2018 08:30:00')
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

        registered: new Date('01/05/2018 10:30:00')
      }];
    this.loaded = true;
    
    
  }

  addUser(user) {
    this.users.push(user);
  }

  fireEvent(e){
    // console.log('button clicked..');
    console.log(e);
  }

  
}