import { Component } from '@angular/core'
import { SpaceService } from '../shared/space.service';
import { ActivatedRoute } from '@angular/router';

@Component({
    templateUrl:
    '/app/spaces/space-devices/space-devices.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px }
        .space-image { height: 100px; }
    `]
})
export class SpaceDevicesComponent {
    space:any

    constructor(private spaceService:SpaceService, 
         private route:ActivatedRoute){
    }

    ngOnInit(){
        this.space = this.spaceService.getSpace(
            +this.route.snapshot.params['id'])
    }

}