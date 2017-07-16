import { NgModule } from '@angular/core'
import { BrowserModule } from  '@angular/platform-browser'
import {RouterModule} from '@angular/router'

import {
    EventThumbnailComponent,
    EventDetailComponent,
    CreateEventComponent,
    EventListComponent,
    EventService,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import { EventsAppComponent } from './events-app.component'
import {Error404Component} from  './errors/404.component'
import {NavBarComponent} from './nav/navbar.component'
import {TOASTER_TOKEN, Toaster} from './common/toaster.service'
import {jQ_TOKEN} from './common/jQuery.service'
import {appRoutes} from "./routes";
import { AuthService } from './user/auth.service'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";
import {SessionListComponent} from "./events/event-details/session-list.component";
import {CollapsibleWell} from "./common/collapsible-well.component";
import {DurationPipe} from "./events/shared/duration.pipe";
import {SimpleModalComponent} from "./common/simpleModal.component";
import {ModalTriggerDirective} from "./common/modalTrigger.directive";

declare let toastr: Toaster;
declare let jQuery: Object;

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component,
        CreateSessionComponent,
        SessionListComponent,
        CollapsibleWell,
        SimpleModalComponent,
        DurationPipe,
        ModalTriggerDirective
    ],
    providers: [
        EventListResolver,
        EventService,
        {provide: TOASTER_TOKEN, useValue: toastr},
        {provide: jQ_TOKEN, useValue: jQuery},
        AuthService,
        EventRouteActivator,
        {
            provide: 'canDeactivateCreateEvent',
            useValue: checkDirtyState
        }
        ],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}

function checkDirtyState(component: CreateEventComponent) {
    if(component.isDirty)
        return window.confirm('You have not save this event, do you really want to cancel?');
    return true;
}