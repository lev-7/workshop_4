import { EventEmitter } from "@angular/core";
import { User } from "../model/user.model"

export class LoginService{
    userSelected = new EventEmitter<User>();
    private currentUser:User;
    private users:User[] = [

        new User(1,"Ömer Demir","The lead male protagonist, and Elif's love interest and future husband.","https://pbs.twimg.com/profile_images/528535589616766976/anXl0SZ2_400x400.jpeg"),
    
        new User(2,"Elif Denizer","The lead female protagonist, and Ömer's love interest and future wife.","https://upload.wikimedia.org/wikipedia/commons/1/13/Elif_Denizer.jpg"),
    
        new User(3,"Nedret Denizer","The future female antagonist, Elif's aunt, and Ahmed's sister. ","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWG4E9TQpEbCXe1Sa6K5u6D8Q2Jiz2I3oCK8xseAAe7wmnVufjSA3vdwxDIJvcZAaCzqc&usqp=CAU")
    
      ]

      getUsers(){
        return this.users.slice();
      }

      getUser(id:number){
        let returnUser;
        this.users.forEach((element)=>{
          console.log(element);
          if(element.id == id){
            returnUser = element
          }
        });
        this.currentUser = returnUser;
        return returnUser
      }

      getCurrentUser(){
        let returnVal;
        if(this.currentUser){
          returnVal = this.currentUser
        }
        // console.log("returnVal");
        // console.log(returnVal);
        return returnVal
      }
}