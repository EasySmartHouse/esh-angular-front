import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import {
    SpacesListComponent,
    SpaceThumbnailComponent,
    SpaceService,
    SpaceDevicesComponent,
    CreateSpaceComponent,
    SpaceRouteActivator,
    SpacesListResolver,
    AddDeviceComponent,
    DeviceListComponent,
    DeviceTypePipe,
    SwitchValuePipe

} from './spaces/index'

import { ESHAppComponent } from './esh-app.component'
import { NavBarComponent } from './nav/navbar.component';
import { ToastrService } from './common/toastr.service';
import { appRoutes } from './routes';
import { RouterModule } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { CollapsibleWellComponent } from './common/collapsible-well.component';

@NgModule({
    imports: [BrowserModule, 
        FormsModule, 
        ReactiveFormsModule, 
        RouterModule.forRoot(appRoutes, { useHash: true })
    ],
    declarations: [
        ESHAppComponent,
        SpacesListComponent,
        SpaceThumbnailComponent,
        SpaceDevicesComponent,
        CreateSpaceComponent,
        NavBarComponent,
        Error404Component,
        AddDeviceComponent,
        DeviceListComponent,
        CollapsibleWellComponent,
        DeviceTypePipe,
        SwitchValuePipe
    ],
    providers: [
        SpaceService,
        ToastrService,
        CollapsibleWellComponent,
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