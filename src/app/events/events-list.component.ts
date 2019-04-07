import { Component } from '@angular/core'
import { IEvent } from './event.interface';

@Component({
    selector: 'events-list',
    templateUrl: './event-list.component.html'
})
export class EventsListComponent {
    event: IEvent = {
        id: 1,
        name: 'Angular Connect',
        date: '9/26/2036',
        time: '10:00 am',
        price: 599.99,
        imageUrl: '/assets/images/angularconnect-shield.png',
        location: {
            address: '1057 DT',
            city: 'London',
            country: 'England'
        }
    };
}