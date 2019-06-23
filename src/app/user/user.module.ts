import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { ProfileComponent } from './profile.component';
import { UserRoutes } from './user.routes'

@NgModule({
    imports: [
        CommonModule, // this is one difference from app module, we load CommonModule instead of BrowserModule
        RouterModule.forChild(UserRoutes.ROUTES) // this is another difference, forChild vs forRoot
    ],
    declarations: [
        ProfileComponent
    ],
    providers: []
})
export class UserModule {

}