
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IEvent } from './event.interface';

@Component ({
    selector: 'event-thumbnail',
    templateUrl: './event-thumbnail.component.html',
    styleUrls: ['./event-thumbnail.component.css']
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    //someProperty: string = "this is a test";

    // Can return either an object (like below) or a string (space separated list of classes) or an array of classes
    getStartTimeClass() {
        const isEarlyStart = this.event && this.event.time === '8:00 am';

        return {green: isEarlyStart, bold: isEarlyStart};
    }

    getStartTimeStyle(): any {
        const isEarlyStart = this.event && this.event.time === '8:00 am';

        return {color: isEarlyStart ? '#003300' : '#bbb', 'font-weight': isEarlyStart ? 'bold' : 'normal'}
    }
}