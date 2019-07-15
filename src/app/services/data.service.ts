import { Injectable } from '@angular/core';
import { User } from '../models/User';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class DataService {
  users : User[];
  data : any;
  constructor() { 
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
  }

getUser() : Observable<User[]>{
  console.log("fetching data from service...");
  return of(this.users);
}

addUser(user : User) {
  this.users.unshift(user);
}

getData(){
  this.data = new Observable(observer =>{
    setTimeout(()=>{
      observer.next("un");
    },1000);

    setTimeout(()=>{
      observer.next("2");
    },2000);

    setTimeout(()=>{
      observer.next("3");
    },3000);

    setTimeout(()=>{
      observer.next("4");
    },4000);
  })
  return this.data;
}

}
