import { Component, Input } from '@angular/core'
import { IDevice, DeviceType } from '../index';
import { OnChanges } from '@angular/core';

@Component({
    selector: 'device-list',
    templateUrl: 'app/spaces/space-devices/device-list.component.html',
    styles: ['collapsible-well h6 {margin-top:-5px; margin-bottom:10px }']
})
export class DeviceListComponent implements OnChanges {
    @Input() devices: IDevice[]
    @Input() filterBy: string;
    visibleDevices: IDevice[] = [];

    ngOnChanges(): void {
        if (this.devices) {
            this.filterDevices(this.filterBy);
        }
    }

    filterDevices(filter) {
        if (filter === 'all') {
            this.visibleDevices = this.devices.slice(0);
        } else {
            let filteredDeviceTypes: DeviceType[] = [];
            if (filter === 'sensor') {
                filteredDeviceTypes.push(DeviceType.Sensor)
            } else if (filter === 'switch') {
                filteredDeviceTypes.push(DeviceType.Switch)
                filteredDeviceTypes.push(DeviceType.AdjustableSwitch)
            } else if (filter === 'alarm') {
                filteredDeviceTypes.push(DeviceType.SignalingElement)
            }

            this.visibleDevices = this.devices.filter(device => {
                return filteredDeviceTypes.indexOf(device.type) !== -1
            })
        }
    }

}
