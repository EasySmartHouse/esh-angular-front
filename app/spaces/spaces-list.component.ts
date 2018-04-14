import { Component } from '@angular/core'
import { SpaceService } from './shared/space.service';
import { ActivatedRoute } from '@angular/router';
import { ISpace } from './index';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { AuthService } from '../user/auth.service';

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
export class SpacesListComponent implements OnInit{
    spaces: ISpace[]

    constructor(private spaceService: SpaceService,
        private route: ActivatedRoute,
        private auth: AuthService) {
    }

    ngOnInit() {
        this.auth.getUser()
        this.spaces = this.route.snapshot.data['spaces']
    }
}   