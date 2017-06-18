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


@NgModule({
    imports:[
        BrowserModule,
        RouterModule.forRoot(appRoutes)
    ],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent,
        EventDetailComponent,
        CreateEventComponent,
        Error404Component
    ],
    providers: [
        EventListResolver,
        EventService,
        ToastrService,
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
    if(component.isDearty)
        return window.confirm('You have not save this event, do you really want to cancel?');
    return true;
}