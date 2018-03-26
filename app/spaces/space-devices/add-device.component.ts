import { Component, OnInit, Output, EventEmitter } from '@angular/core'
import { FormControl, Validators, FormGroup } from '@angular/forms';
import { IDevice, restrictedWords } from '../index';

@Component({
    selector: 'add-device',
    templateUrl: 'app/spaces/space-devices/add-device.component.html',
    styles: [`
    em {float:right; color:#E05C64; padding-left: 10px}
    .error input, .error select, .error textarea {background-color: #E3C3C5;}
    .error ::-webkit-input-placeholder { color: #999; }
    .error ::-moz-placeholder { color: #999; }
    .error :-moz-placeholder { color: #999; }
    .error :ms-input-placeholder { color: #999; }
`]
})
export class AddDeviceComponent implements OnInit {
    @Output() saveNewDevice = new EventEmitter()
    @Output() cancelAddDevice = new EventEmitter()

    addDeviceForm: FormGroup
    deviceLabel: FormControl
    deviceAddress: FormControl
    deviceType: FormControl
    deviceDescription: FormControl

    ngOnInit(): void {
        this.deviceLabel = new FormControl('', Validators.required)
        this.deviceAddress = new FormControl('', Validators.required)
        this.deviceType = new FormControl('', Validators.required)
        this.deviceDescription = new FormControl('', [Validators.required,
        Validators.maxLength(400), restrictedWords(['foo', 'bar'])])

        this.addDeviceForm = new FormGroup({
            deviceLabel: this.deviceLabel,
            deviceAddress: this.deviceAddress,
            deviceType: this.deviceType,
            deviceDescription: this.deviceDescription
        })
    }

    saveDevice(formValues) {
        let device: IDevice = {
            id: undefined,
            label: formValues.deviceLabel,
            address: formValues.deviceAddress,
            enabled: true,
            type: formValues.deviceType,
            description: formValues.deviceDescription,
            value: undefined
        }
        this.saveNewDevice.emit(device)
    }

    cancel() {
        this.cancelAddDevice.emit()
    }

}