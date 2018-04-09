import { CanActivate } from "@angular/router/src/interfaces";
import { SpaceService } from "../shared/space.service";
import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, RouterStateSnapshot, Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Injectable()
export class SpaceRouteActivator implements CanActivate {

    constructor(private spaceService: SpaceService,
        private router: Router) {
    }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        const spaceExists = !!this.spaceService.getSpace(+route.params['id'])

        if (!spaceExists)
            this.router.navigate(['/404'])
        return spaceExists;
    }

}