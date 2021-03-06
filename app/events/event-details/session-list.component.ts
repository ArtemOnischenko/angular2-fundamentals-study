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
    @Input() sortBy:string;


    ngOnChanges() {
        if(this.sessions) {
            this.filterSession(this.filterBy);
            this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByNameDesc);
        }
    }

    filterSession(filter) {
        if(filter === 'all'){
            this.visibleSessions = this.sessions.slice(0);
        } else {
            this.visibleSessions = this.sessions.filter(session => session.level.toLocaleLowerCase() == filter)
        }
    }
}

function sortByNameAsc(s1:ISession, s2:ISession) {
    if(s1.name > s2.name) return 1;
    else if(s1.name === s2.name) return 2;
    else return -1;
}

function sortByNameDesc(s1:ISession, s2:ISession) {
    return s2.voters.length -s1.voters.length;
}