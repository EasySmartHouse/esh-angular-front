import {} from 'jasmine';
import { DeviceListComponent, DeviceType, IDevice } from '../index';

describe('DeviceListComponent', () => {
    let component: DeviceListComponent
    let mockAuthService, mockVoterService

    beforeEach(() => {
        component = new DeviceListComponent(mockAuthService, 
            mockVoterService)
    })

    describe('ngOnChange', () => {

        it('should filter the devices correctly', () => {
            component.devices = <IDevice[]>[
                {id: 1, label:'device 4', deviceType: DeviceType.Actuator, voters:[1]},
                {id: 3, label:'device 2', deviceType: DeviceType.Sensor, voters:[5,4,3,6,7,8]},
                {id: 4, label:'device 7', deviceType: DeviceType.Sensor, voters:[4,3,5]}
            ]
            component.filterBy = 'sensor'
            component.sortBy = 'label'

            component.ngOnChanges()

            expect(component.visibleDevices.length).toBe(2)
            expect(component.visibleDevices[0].id).toBe(3)
            expect(component.visibleDevices[1].id).toBe(4)
        })

        it('should sort the devices correctly', () => {
            component.devices = <IDevice[]>[
                {id: 1, label:'device D', deviceType: DeviceType.Actuator, voters:[1]},
                {id: 3, label:'device A', deviceType: DeviceType.Sensor, voters:[5,4,3,6,7,8]},
                {id: 4, label:'device Z', deviceType: DeviceType.Sensor, voters:[4,3,5]}
            ]
            component.filterBy = 'all'
            component.sortBy = 'label'

            component.ngOnChanges()

            expect(component.visibleDevices[0].label).toBe('device A')
            expect(component.visibleDevices[1].label).toBe('device D')
            expect(component.visibleDevices[2].label).toBe('device Z')
        })

    })
})