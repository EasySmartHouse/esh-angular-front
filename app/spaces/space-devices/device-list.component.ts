import { Component, Input } from '@angular/core'
import { IDevice } from '../index';

@Component({
    selector: 'device-list',
    templateUrl: 'app/spaces/space-devices/device-list.component.html'
})
export class DeviceListComponent {
    @Input() devices:IDevice[]
}
