import { Component, OnInit } from '@angular/core'
import { IEvent } from './event.interface';
import { EventService } from './event.service';

@Component({
    //selector: 'events-list',  // removed after router was added
    templateUrl: './events-list.component.html'
})
export class EventsListComponent implements OnInit {

    public events: IEvent[];

    constructor(private eventService: EventService) {

    }

    ngOnInit(): void {
      this.eventService.getEvents().subscribe(events => this.events = events);
    }
}