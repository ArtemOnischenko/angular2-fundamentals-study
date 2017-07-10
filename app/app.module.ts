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
import {ToastrService} from './common/toaster.service'
import {appRoutes} from "./routes";
import { AuthService } from './user/auth.service'
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {CreateSessionComponent} from "./events/event-details/create-session.component";
import {SessionListComponent} from "./events/event-details/session-list.component";
import {CollapsibleWell} from "./common/collapsible-well.component";
import {DurationPipe} from "./events/shared/duration.pipe";


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
        DurationPipe
    ],
    providers: [
        EventListResolver,
        EventService,
        ToastrService,
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