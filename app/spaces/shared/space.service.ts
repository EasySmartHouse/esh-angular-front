import { Injectable, EventEmitter } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { ISpace, DeviceType } from './space.model';
import { Observable } from 'rxjs/Observable';
import { IDevice } from '../index';

@Injectable()
export class SpaceService {
    getSpaces(): Subject<ISpace[]> {
        let subject = new Subject<ISpace[]>()
        setTimeout(() => { subject.next(SPACES); subject.complete(); }, 200)
        return subject;
    }

    getSpace(id: number): ISpace {
        return SPACES.find(space => space.id === id)
    } 

    saveSpace(space){
        space.id = 999
        SPACES.push(space)
    }

    updateSpace(space){
         let index = SPACES.findIndex(x => x.id = space.id)
         SPACES[index] = space
    }

    searchDevices(searchTerm: string){
        var term = searchTerm.toLocaleLowerCase();
        var results: IDevice[] = [];

        SPACES.forEach(space =>{
            var matchingDevices = space.devices.filter(device=>
                device.label.toLocaleLowerCase().indexOf(term) > -1
            )
            matchingDevices = matchingDevices.map((device:any) => {
                device.spaceId = space.id
                return device;
            })
            results = results.concat(matchingDevices)
        })

        var emitter = new EventEmitter(true);
        setTimeout(() => {
            emitter.emit(results)     
        }, 100);

        return emitter;
    }
}

const SPACES: ISpace[] = [
    {
        id: 1,
        name: "Guest room",
        image: '/app/assets/images/026-lamp-1.png',
        devices: [{
            id: 123,
            label: "Lamp switch",
            address: "AD3452347767767FF",
            enabled: true,
            type: DeviceType.Switch,
            description: "Guest Room lamp switch",
            value: 1,
            voters: [1, 2, 3],
        }]
    },
    {
        id: 2,
        name: "Main room",
        image: '/app/assets/images/040-home.png',
        devices: []
    },
    {
        id: 3,
        name: "Kitchen",
        image: '/app/assets/images/033-refrigerator.png',
        devices: []
    },
]