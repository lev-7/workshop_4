import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LoginService } from '../login/login.service';
import { User } from '../model/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() user:User; //= new User(1,"Ömer Demir","The lead male protagonist, and Elif's love interest and future husband.","https://pbs.twimg.com/profile_images/528535589616766976/anXl0SZ2_400x400.jpeg");
  
  constructor(private router: Router,
              private route: ActivatedRoute,
              private loginService:LoginService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.user = this.loginService.getUser(id);
    console.log(this.user);
  }

  onReload(){
    //this.router.navigate(['account'],{relativeTo: this.route});
    //this.loginService.getUser(id);
  }

}
