import { Routes } from '@angular/router'
import {
    SpacesListComponent,
    SpaceDevicesComponent,
    CreateSpaceComponent,
    SpaceRouteActivator,
    SpacesListResolver,
    AddDeviceComponent

} from './spaces/index'
import { Error404Component } from './errors/404.component';
import { SpaceResolver } from './spaces/space-resolver.service';
import { UrlPermission } from "./permission/url.permission";

export const appRoutes: Routes = [
    { path: 'spaces/new', component: CreateSpaceComponent, canDeactivate: ['canDeactivateCreateSpace'], canActivate: [UrlPermission] },
    { path: 'spaces', component: SpacesListComponent,  canActivate: [UrlPermission], resolve: { spaces: SpacesListResolver } },
    { path: 'spaces/:id', component: SpaceDevicesComponent,  canActivate: [UrlPermission], resolve: { space: SpaceResolver } },
    { path: 'spaces/device/add',  canActivate: [UrlPermission], component: AddDeviceComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/spaces',  canActivate: [UrlPermission], pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]