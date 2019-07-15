import { DataService } from './../../services/data.service';
import { User } from './../../models/User';
import { Component, OnInit, ViewChild } from '@angular/core';


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
  @ViewChild('userForm')  form : any;

  data : any;
 

  constructor(private dataService:DataService) {

   }

  ngOnInit() {
    this.dataService.getData().subscribe(data=>{
      console.log(data);
    });
    this.dataService.getUser().subscribe(users =>{
      this.users = users;
    });
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



  onSubmit({value ,  valid} : {value:User , valid:boolean}){
    if(!valid){
      console.log('Form is not valid');
    }else{
      value.isActive = true;
      value.registered = new Date();
      value.hide = true;
      this.dataService.addUser(value);
      this.form.reset();
    }
    
  }
  
}