
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './event.interface';

@Component ({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styles: [`
        .pad-left { margin-left: 10px; }
        .well div { color: #bbb; }
    `]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    someProperty: string = "this is a test";
}