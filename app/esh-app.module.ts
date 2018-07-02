import './rxjs-extensions'
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { UrlPermission } from "./permission/url.permission";

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
    SwitchValuePipe,
    UpvoteComponent,
    VoterService,
    SpaceResolver

} from './spaces/index'

import { ESHAppComponent } from './esh-app.component'
import { NavBarComponent } from './nav/navbar.component';
import {
    JQ_TOKEN,
    TOASTR_TOKEN,
    Toastr,
    CollapsibleWellComponent,
    SimpleModalComponent,
    ModalTriggerDirective
} from './common/index';
import { appRoutes } from './routes';
import { RouterModule, PreloadAllModules } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';

declare let toastr: Toastr
declare let $: any;

@NgModule({
    imports: [BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        HttpModule,
        RouterModule.forRoot(appRoutes, 
            { preloadingStrategy: PreloadAllModules, useHash: true }
        )
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
        SwitchValuePipe,
        SimpleModalComponent,
        ModalTriggerDirective,
        UpvoteComponent
    ],
    providers: [
        SpaceService,
        { provide: TOASTR_TOKEN, useValue: toastr },
        { provide: JQ_TOKEN, useValue: $ },
        CollapsibleWellComponent,
        SpaceRouteActivator,
        SpacesListResolver,
        SpaceResolver,
        AuthService,
        VoterService,
        UrlPermission,
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