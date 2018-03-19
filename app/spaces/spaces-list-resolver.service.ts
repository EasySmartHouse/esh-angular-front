import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { SpaceService } from "./shared/space.service";

@Injectable()
export class SpacesListResolver implements Resolve<any>{
    constructor(private spaceService: SpaceService) {
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        return this.spaceService.getSpaces();
    }

}