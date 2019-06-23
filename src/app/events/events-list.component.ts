import { Component, OnInit } from '@angular/core'
import { IEvent } from './event.interface';
import { EventService } from './event.service';

@Component({
    selector: 'events-list',
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    public events: IEvent[];

    constructor(private eventService: EventService) {

    }

    ngOnInit(): void {
      this.events = this.eventService.getEvents();
    }
}