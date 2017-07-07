import  { Routes } from '@angular/router'

import {
    EventDetailComponent,
    CreateEventComponent,
    EventListComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'
import {CreateSessionComponent} from "./events/event-details/create-session.component";

import  { Error404Component } from  './errors/404.component'

export const appRoutes:Routes = [
    {path: 'events', component: EventListComponent, resolve: {events:EventListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]