import { Component, Input, OnInit } from '@angular/core';
import { User } from '../model/user.model';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  @Input() user:User; //= new User(1,"Ömer Demir","The lead male protagonist, and Elif's love interest and future husband.","https://pbs.twimg.com/profile_images/528535589616766976/anXl0SZ2_400x400.jpeg");
  
  constructor() { }

  ngOnInit(): void {
  }

}
