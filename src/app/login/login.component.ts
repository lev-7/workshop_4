import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../model/user.model';
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

  @Output() userSelected = new EventEmitter<User>()

  users:User[] = [

    new User(1,"Ömer Demir","The lead male protagonist, and Elif's love interest and future husband.","https://pbs.twimg.com/profile_images/528535589616766976/anXl0SZ2_400x400.jpeg"),

    new User(2,"Elif Denizer","The lead female protagonist, and Ömer's love interest and future wife.","https://upload.wikimedia.org/wikipedia/commons/1/13/Elif_Denizer.jpg"),

    new User(3,"Nedret Denizer","The future female antagonist, Elif's aunt, and Ahmed's sister. ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWG4E9TQpEbCXe1Sa6K5u6D8Q2Jiz2I3oCK8xseAAe7wmnVufjSA3vdwxDIJvcZAaCzqc&usqp=CAU")

  ]

  constructor() { }

  ngOnInit(): void {
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
      if(element.name == f.value.username && element.password == f.value.pass){
        this.userSelected.emit(element);
        const currentUser = new User(element.id,element.name,element.description,element.imagePath);
        this.currentUser = currentUser;
        this.hasCurrentUser = true;
        this.loginFail = false
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
