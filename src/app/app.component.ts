import { Component, ElementRef } from '@angular/core';
import { User } from './model/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user:User[] = [

    new User(1,"Ömer Demir","The lead male protagonist, and Elif's love interest and future husband.","https://pbs.twimg.com/profile_images/528535589616766976/anXl0SZ2_400x400.jpeg"),
  
    new User(2,"Elif Denizer","The lead female protagonist, and Ömer's love interest and future wife.","https://upload.wikimedia.org/wikipedia/commons/1/13/Elif_Denizer.jpg"),
  
    new User(3,"Nedret Denizer","The future female antagonist, Elif's aunt, and Ahmed's sister. ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWG4E9TQpEbCXe1Sa6K5u6D8Q2Jiz2I3oCK8xseAAe7wmnVufjSA3vdwxDIJvcZAaCzqc&usqp=CAU")
  
  ]

  title = 'week4tut';
}
