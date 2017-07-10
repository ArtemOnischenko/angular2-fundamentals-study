import {Component, Input, OnChanges} from '@angular/core'
import {ISession} from "../shared/event.model";

@Component({
    selector: 'session-list',
    templateUrl: './app/events/event-details/session-list.component.html'
})
export class SessionListComponent implements OnChanges{
    @Input() sessions:ISession[];
    @Input() visibleSessions:ISession[];
    @Input() filterBy:string;

    ngOnChanges() {
        if(this.sessions) {
            this.filterSession(this.filterBy);
        }
    }

    filterSession(filter) {
        console.log(filter);
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() == filter)
        }
    }
}
