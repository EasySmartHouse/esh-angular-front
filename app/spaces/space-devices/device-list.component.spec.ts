import {} from 'jasmine';
import { DeviceListComponent, DeviceType, IDevice } from '../index';

describe('DeviceListComponent', () => {
    let instance: DeviceListComponent
    let mockAuthService, mockVoterService

    beforeEach(() => {
        instance = new DeviceListComponent(mockAuthService, 
            mockVoterService)
    })

    describe('ngOnChange', () => {
        it('should create the component', () => {  
            expect( instance).toBeTruthy()
        })

        it('should filter the devices correctly', () => {
            instance.devices = <IDevice[]>[
                {id: 1, label:'device 4', deviceType: DeviceType.Actuator, voters:[1]},
                {id: 3, label:'device 2', deviceType: DeviceType.Sensor, voters:[5,4,3,6,7,8]},
                {id: 4, label:'device 7', deviceType: DeviceType.Sensor, voters:[4,3,5]}
            ]
            instance.filterBy = 'sensor'
            instance.sortBy = 'label'

            instance.ngOnChanges()

            expect( instance.visibleDevices.length).toBe(2)
            expect( instance.visibleDevices[0].id).toBe(3)
            expect( instance.visibleDevices[1].id).toBe(4)
        })

        it('should sort the devices correctly', () => {
            instance.devices = <IDevice[]>[
                {id: 1, label:'device D', deviceType: DeviceType.Actuator, voters:[1]},
                {id: 3, label:'device A', deviceType: DeviceType.Sensor, voters:[5,4,3,6,7,8]},
                {id: 4, label:'device Z', deviceType: DeviceType.Sensor, voters:[4,3,5]}
            ]
            instance.filterBy = 'all'
            instance.sortBy = 'label'

            instance.ngOnChanges()

            expect( instance.visibleDevices[0].label).toBe('device A')
            expect( instance.visibleDevices[1].label).toBe('device D')
            expect( instance.visibleDevices[2].label).toBe('device Z')
        })

    })
})