import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { LoginService } from './login.service';
// import { NgForm } from '@angular/forms'

// import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username:string = "";
  password:string = "";
  entryMade = false;
  currentUser:User;
  hasCurrentUser=false;
  loginFail = false;

  //@Output() userSelected = new EventEmitter<User>()

  users:User[]

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.users = this.loginService.getUsers();
  }


  onSubmitUser(){
    console.log("onSubmitUser");
    console.log("Submitted");
  }

  onSubmit(f:NgForm){
    console.log("onSubmit");
    // console.log("Submitted");
    // console.log(f.value);
    // this.username = f.value.username;
    // this.password = f.value.pass;
    // console.log("Details");
    // console.log(this.username);
    // console.log(this.password);
    this.users.forEach((element)=>{
      console.log(element);
      
      if(element.name == f.value.username && element.password == f.value.pass){
        //this.userSelected.emit(element);
        const current = new User(element.id,element.name,element.description,element.imagePath);
        this.currentUser = current;
        if(this.currentUser){
          this.hasCurrentUser = true;
          this.loginFail = false;
        }else{
          this.loginFail = true
          this.hasCurrentUser = false;
        }
        this.loginService.userSelected.emit(element);
        this.router.navigate(['/account/'+element.id]);
      }else{
        this.loginFail = true
        this.hasCurrentUser = false;
      }
    });
    console.log(this.hasCurrentUser);
    console.log(this.currentUser);


  }

  getColor(){
    // console.log("getColor CALLED!");
    return this.loginFail === true ? 'red':'green';
  }

}
