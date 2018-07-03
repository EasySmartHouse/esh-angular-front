import { Component } from '@angular/core'
import { SpaceService } from '../shared/space.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISpace, IDevice } from '../index';
import { Observable } from 'rxjs/Rx';

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
    sortBy: string = 'popularity'

    constructor(private spaceService: SpaceService,
        private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.data.forEach((data) => {
            this.space = data['space']
            this.addMode = false
        })

        let timer = Observable.timer(0, 1000)
        timer.subscribe(t => 
            this.spaceService.getSpace(this.space.id).subscribe(
                space => this.space = space
            )
        );
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