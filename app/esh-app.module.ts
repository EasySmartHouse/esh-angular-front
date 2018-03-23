import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import {
    SpacesListComponent,
    SpaceThumbnailComponent,
    SpaceService,
    SpaceDevicesComponent,
    CreateSpaceComponent,
    SpaceRouteActivator,
    SpacesListResolver

} from './spaces/index'

import { ESHAppComponent } from './esh-app.component'
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, { useHash: true })],
    declarations: [
        ESHAppComponent,
        SpacesListComponent,
        SpaceThumbnailComponent,
        SpaceDevicesComponent,
        CreateSpaceComponent,
        NavBarComponent,
        Error404Component
    ],
    providers: [
        SpaceService,
        ToastrService,
        SpaceRouteActivator,
        SpacesListResolver,
        AuthService,
        { provide: 'canDeactivateCreateSpace', useValue: checkDirtyState }
    ],
    bootstrap: [ESHAppComponent]
})
export class ESHAppModule {
}

function checkDirtyState(component: CreateSpaceComponent) {
    if (component.isDirty)
        return window.confirm('You have not saved this Space, do you really want to cancel?')
    return true
}