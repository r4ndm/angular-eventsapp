import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    templateUrl: './create-event.component.html'
})
export class CreateEventComponent {

    public constructor(private router: Router) {

    }

    public cancel() {
        this.router.navigate(['/events']);
    }
}