import { NgModule } from '@angular/core'
import { BrowserModule } from  '@angular/platform-browser'

import { EventsAppComponent } from './events-app.component'
import { EventListComponent } from './events/event-list.componet'
import {EventThumbnailComponent} from  './events/event-thumbnail.component'
import {NavBarComponent} from './nav/navbar.component'

import {EventService} from './events/shared/event.service'
import {ToastrService} from './common/toaster.service'


@NgModule({
    imports:[BrowserModule],
    declarations: [
        EventsAppComponent,
        EventListComponent,
        EventThumbnailComponent,
        NavBarComponent],
    providers: [EventService, ToastrService],
    bootstrap: [EventsAppComponent]
})
export class AppModule {}