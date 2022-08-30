import { Component, EventEmitter, Output,OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { LoginService } from "../login/login.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html'
})

export class HeaderComponent implements OnInit{
    @Output() sectionSelected = new EventEmitter<string>()

    constructor(private router:Router,
                private loginService:LoginService){}

    ngOnInit(): void {
        
    }

    onSelect(section:string){
        this.sectionSelected.emit(section);
    }

    onNavigate(route:string){
        if(route == "account"){
            if(this.loginService.getCurrentUser()){
                let user = this.loginService.getCurrentUser();
                this.router.navigate(['/account/'+user.id]);
            }
        }
        this.router.navigate(['/'+ route]);
    }
}