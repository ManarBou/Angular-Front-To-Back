import { User } from './../../models/User';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users : User[];
  bool : boolean = true;
  loaded : boolean = false;
  showExtended : boolean = true;
  enableAdd : boolean = false;

  constructor() { }

  ngOnInit() {
    this.users = [
      {
        firstName : 'david',
        lastName : 'david',
        age : 33,
        address : {
          street : 'dd',
          city : 'd',
          state : 'd'
        },
        image : "https://lorempixel.com/600/600/people/3"
      },
      {
        firstName : 'manar',
        lastName : 'manar',
        age : 24,
        address : {
            street : 'bd',
            city : 'test',
            state : 'casa'
        },
        image : "https://lorempixel.com/600/600/people/2"
      }
      ];
      this.loaded = true;
      // this.showExtended = false;
      this.addUser({
        firstName : 'test',
        lastName : 'test',
        image : "https://lorempixel.com/600/600/people/5"
        });
  
    }
  
    addUser(user){
      this.users.push(user);
  }    

  


}