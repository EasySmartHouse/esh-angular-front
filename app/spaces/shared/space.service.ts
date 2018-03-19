import { Injectable } from '@angular/core'
import { Subject } from 'rxjs/Subject';

@Injectable()
export class SpaceService {
    getSpaces(){
        let subject = new Subject()
        setTimeout(()=> 
            {subject.next(SPACES); subject.complete();}, 
            200
        )
        return subject;
    }

    getSpace(id:number){
        return SPACES.find(space => space.id === id)
    }
}

const SPACES = [
    {
        id: 1, 
        name: "Guest room",
        image: '/app/assets/images/026-lamp-1.png'
    },
    {
        id: 2,
        name: "Main room",
        image: '/app/assets/images/040-home.png'
    
    },
    {
        id: 3,
        name: "Kitchen",
        image: '/app/assets/images/033-refrigerator.png'
    },
    ]