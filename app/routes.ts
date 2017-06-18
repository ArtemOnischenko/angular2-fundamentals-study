import  { Routes } from '@angular/router'

import {
    EventDetailComponent,
    CreateEventComponent,
    EventListComponent,
    EventRouteActivator,
    EventListResolver
} from './events/index'

import  { Error404Component } from  './errors/404.component'

export const appRoutes:Routes = [
    {path: 'events', component: EventListComponent, resolve: {events:EventListResolver}},
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events/:id', component: EventDetailComponent, canActivate: [EventRouteActivator]},
    {path: '404', component: Error404Component},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: 'app/user/user.module#UserModule'}
]