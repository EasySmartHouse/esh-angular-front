import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ESHAppComponent } from './esh-app.component'
import { SpacesListComponent } from './spaces/spaces-list.component';
import { SpaceThumbnailComponent } from './spaces/space-thumbnail.component'
import { NavBarComponent } from './nav/navbar.component';
import { SpaceService } from './spaces/shared/space.service';
import { ToastrService } from './common/toastr.service';
import { SpaceDevicesComponent } from './spaces/space-devices/space-devices.component';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { CreateSpaceComponent } from './spaces/create-space.component';
import { SpaceRouteActivator } from './spaces/space-devices/space-route-activator.service';
import { Error404Component } from './errors/404.component';
import { SpacesListResolver } from './spaces/spaces-list-resolver.service';

@NgModule({
    imports: [BrowserModule, RouterModule.forRoot(appRoutes, {useHash: true})],
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
        { provide: 'canDeactivateCreateSpace', useValue: checkDirtyState}
    ],
    bootstrap: [ESHAppComponent]
})
export class ESHAppModule {
}

function checkDirtyState(component:CreateSpaceComponent){
    if (component.isDirty)
        return window.confirm('You have not saved this Space, do you really want to cancel?')  
    return true
}