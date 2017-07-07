import { Component } from '@angular/core'
import  { Router } from '@angular/router'
import {EventService} from "./shared/event.service";

@Component({
    templateUrl: 'app/events/create-event.component.html',
    styles: [`
        em {float: right; color: #bd362f; padding-left: 10px}
        .error input {background: #E3C3C5}
    `]
})
export class CreateEventComponent {
    isDirty:boolean = true;
    event:any;
    constructor(private router:Router, private eventService:EventService){

    }

    saveEvent(formValues){
        this.eventService.saveEvent(formValues);
        this.isDirty = false;
        this.router.navigate(['/events']);
    }

    cancel() {
        this.router.navigate(['/events']);
    }
}