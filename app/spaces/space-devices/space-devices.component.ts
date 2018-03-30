import { Component } from '@angular/core'
import { SpaceService } from '../shared/space.service';
import { ActivatedRoute } from '@angular/router';
import { ISpace, IDevice } from '../index';

@Component({
    templateUrl:
        '/app/spaces/space-devices/space-devices.component.html',
    styles: [`
        .container { padding-left:20px; padding-right:20px }
        .space-image { height: 100px; }
        a { cursor:pointer }
    `]
})
export class SpaceDevicesComponent {
    space: ISpace
    addMode: boolean
    filterBy: string = 'all'

    constructor(private spaceService: SpaceService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.space = this.spaceService.getSpace(
            +this.route.snapshot.params['id'])
    }
 
    addDevice() {
        this.addMode = true
    }

    saveNewDevice(device: IDevice) {
        const nextId = Math.max.apply(null, this.space.devices.map(d => d.id));
        device.id = nextId + 1
        this.space.devices.push(device)
        this.spaceService.updateSpace(this.space)
        this.addMode = false
    }

    cancelAddDevice() {
        this.addMode = false
    }

}