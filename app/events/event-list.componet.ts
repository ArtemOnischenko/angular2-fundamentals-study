import {Component, OnInit} from "@angular/core";
import {EventService} from "./shared/event.service";
import {ToastrService} from "../common/toaster.service";
import {ActivatedRoute} from "@angular/router"

@Component({
    selector: 'event-list',
    template: `
        <div>
            <h1>Upcoming Angular 2 Events</h1>
            <hr>
            <div class="row">
                <div *ngFor="let event of events" class="col-md-5">
                    <event-thumbnail (click)="thumbnailClick(event.name)" [event]="event"></event-thumbnail>
                </div>
            </div>
        </div>`,
})
export class EventListComponent implements OnInit {
    events: any[];

    constructor(private eventService: EventService, private toastr: ToastrService, private route: ActivatedRoute) {

    }
    ngOnInit() {
        this.events = this.route.snapshot.data['events']
    }
    thumbnailClick(name) {
        this.toastr.success(name)
    }
}