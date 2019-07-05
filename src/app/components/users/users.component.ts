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
  enableAdd : boolean = true;
  isActive : boolean = true;
  currentClasses ={}; 
  currentStyle ={}; 

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
        image : "https://lorempixel.com/600/600/people/3",
        isActive : true,
        balance : 100,
        registered : new Date('01/02/2018 08:30:00')
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
        image : "https://lorempixel.com/600/600/people/2",
        balance : 200,
        registered : new Date('07/02/2018 08:30:00')
      },
      {
        firstName : 'david',
        lastName : 'david',
        age : 33,
        address : {
          street : 'dd',
          city : 'd',
          state : 'd'
        },
        image : "https://lorempixel.com/600/600/people/5",
        isActive : true,
        balance : 100,
        registered : new Date('01/05/2018 10:30:00')
      }];
      this.loaded = true;
      // this.showExtended = false;
      this.setCurrentClasses();
      this.setCurrentStyle();
     }

    addUser(user){
      this.users.push(user);
     }   

    setCurrentClasses(){
    this.currentClasses = {
      'btn-success' : this.enableAdd,
      'big-text'    : this.showExtended
    }
  }
  setCurrentStyle(){
    this.currentStyle = {
      'padding-top' : this.showExtended ? '0' : '40px',
      'font-size'   : this.showExtended ? ''  : '40px'
    }
  }

  


}