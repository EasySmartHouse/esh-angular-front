import { Routes } from '@angular/router'
import { SpacesListComponent } from "./spaces/spaces-list.component";
import { SpaceDevicesComponent } from "./spaces/space-devices/space-devices.component";

export const appRoutes:Routes = [
    { path: 'spaces', component: SpacesListComponent},
    { path: 'spaces/:id', component: SpaceDevicesComponent},
    { path: '', redirectTo: '/spaces', pathMatch: 'full'}
]