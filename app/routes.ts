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

export const appRoutes: Routes = [
    { path: 'spaces/new', component: CreateSpaceComponent, canDeactivate: ['canDeactivateCreateSpace'] },
    { path: 'spaces', component: SpacesListComponent, resolve: { spaces: SpacesListResolver } },
    { path: 'spaces/:id', component: SpaceDevicesComponent, resolve: { space: SpaceResolver } },
    { path: 'spaces/device/add', component: AddDeviceComponent },
    { path: '404', component: Error404Component },
    { path: '', redirectTo: '/spaces', pathMatch: 'full' },
    { path: 'user', loadChildren: 'app/user/user.module#UserModule' }
]