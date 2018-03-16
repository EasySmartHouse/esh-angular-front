import { Component } from '@angular/core'
import { SpaceService } from './shared/space.service';

@Component({
    template: `
    <div>
        <h1>Current spaces</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let space of spaces" class="col-md-5">
                <space-thumbnail [space]="space"></space-thumbnail>
            </div>
        </div>
    </div>
    `
})
export class SpacesListComponent {
    spaces:any[]

    constructor(private spaceService: SpaceService){
    }

    ngOnInit(){
        this.spaces = this.spaceService.getSpaces()
    }
}   