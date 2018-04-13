import { ProfileComponent } from "./profile.component";
import { LoginComponent } from "./login.component";
import { UrlPermission } from "../permission/url.permission";

export const userRoutes = [
    { path: 'profile', component: ProfileComponent, canActivate: [UrlPermission] },
    { path: 'login', component: LoginComponent }
] 