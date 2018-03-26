import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';
import { ISpace } from './space.model';
import { Observable } from 'rxjs/Observable';

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
}

const SPACES: ISpace[] = [
    {
        id: 1,
        name: "Guest room",
        image: '/app/assets/images/026-lamp-1.png',
        devices: []
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