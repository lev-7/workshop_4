import { Component, ElementRef, OnInit } from '@angular/core';
import { AccountService } from './account/account.service';
import { LoginService } from './login/login.service';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LoginService,AccountService]
})
export class AppComponent implements OnInit{
  selectedSection = 'login';
  loggedInUser = true;
  title = 'week4tut';
  selectedUser:User;
  constructor(private loginService:LoginService){}

  onNavigate(section:string){
    this.selectedSection = section
  }

  ngOnInit(): void {
    this.loginService.userSelected.subscribe(
      (user:User)=>{
        this.selectedUser = user;
      }
    );
  }
}
