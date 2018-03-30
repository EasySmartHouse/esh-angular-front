import { Pipe, PipeTransform } from '@angular/core'
import { DeviceType } from '../index';

@Pipe({name: 'deviceType'})
export class DeviceTypePipe implements PipeTransform {

    transform(value: DeviceType) {
        switch(value){
            case DeviceType.Sensor: return 'Sensor device'
            case DeviceType.Switch: return 'Switch device'
            case DeviceType.AdjustableSwitch: return 'Adjustable switch device'
            case DeviceType.SignalingElement: return 'Signaling device'
            default: return 'Unknown device'
        }
    }
    
}