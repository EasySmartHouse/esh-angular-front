import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { SpaceService } from "./index";


@Injectable()
export class SpaceResolver implements Resolve<any>{

    constructor(private spaceService: SpaceService) { }

    resolve(route: ActivatedRouteSnapshot) {
        return this.spaceService.getSpace(route.params['id']);
    }
}