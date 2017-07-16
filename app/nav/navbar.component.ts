import {Component} from '@angular/core'
import {AuthService} from '../user/auth.service'
import {ISession} from "../events/shared/event.model";
import {EventService} from "../events/shared/event.service";

@Component({
    selector: 'nav-bar',
    templateUrl: './app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size:15px}
        #searchForm {margin-right: 100px;}
        @media (max-width: 120px) {
            #searchForm {display: none;}
        }
        li > a.active {color: #F97924; }
    `]
})
export class NavBarComponent {
    searchTerm:string = '';
    foundSession:ISession[];
    constructor(private auth:AuthService, private eventService:EventService) {

    }

    searchSession(searchTerm){
        this.eventService.searchSession(searchTerm).subscribe( sessions => {
            this.foundSession = sessions;
            console.log(this.foundSession);
        });
    }

}