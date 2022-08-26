import { Component, ElementRef } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedSection = 'login';
  loggedInUser = false;
  title = 'week4tut';

  onNavigate(section:string){
    this.selectedSection = section
  }

}
