import { Routes } from '@angular/router'
import { SpacesListComponent } from "./spaces/spaces-list.component";
import { SpaceDevicesComponent } from "./spaces/space-devices/space-devices.component";
import { CreateSpaceComponent } from './spaces/create-space.component';
import { SpaceRouteActivator } from './spaces/space-devices/space-route-activator.service';
import { Error404Component } from './errors/404.component';

export const appRoutes:Routes = [
    { path: 'spaces/new', component: CreateSpaceComponent},
    { path: 'spaces', component: SpacesListComponent},
    { path: 'spaces/:id', component: SpaceDevicesComponent, canActivate: [SpaceRouteActivator]},
    { path: '404', component: Error404Component},
    { path: '', redirectTo: '/spaces', pathMatch: 'full'}
]