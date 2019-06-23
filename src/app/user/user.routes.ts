import { Routes } from '@angular/router'

import { ProfileComponent } from './profile.component'

export class UserRoutes {
    public static readonly ROUTES: Routes = [
        { path: 'profile', component: ProfileComponent }
    ]
}