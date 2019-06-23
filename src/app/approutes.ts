import { Routes } from '@angular/router'
import { EventsListComponent } from './events/events-list.component'
import { EventDetailsComponent } from './events/event-details/event-details.component'
import { CreateEventComponent } from './events/create-event.component';
import { Error404Component } from './errors/404.component';

export class AppRoutes {
    static readonly ROUTES: Routes = [
        { path: 'events/new', component: CreateEventComponent },
        { path: 'events', component: EventsListComponent },
        { path: 'events/:id', component: EventDetailsComponent },
        { path: '404', component: Error404Component},
        { path: '', redirectTo: '/events', pathMatch: 'full'},
        { path: 'user', loadChildren: './user/user.module#UserModule'}
    ]
}
