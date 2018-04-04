import { Component } from '@angular/core'
import { AuthService } from '../user/auth.service';
import { IDevice, SpaceService } from '../spaces/index';

@Component({
    selector: 'nav-bar', 
    templateUrl: '/app/nav/navbar.component.html',
    styles: [`
        .nav.navbar-nav {font-size: 15px;}
        #searchForm {margin-right: 100px;}
        @media (max-width: 1200px) {#searchForm {display:none}}
        li > a.active {color: #F97924; }
    `]
})
export class NavBarComponent {
    searchTerm: string = "";
    foundDevices: IDevice[];

    constructor(private auth: AuthService, private spaceService: SpaceService){
    }

    searchDevices(searchTerm){
        this.spaceService.searchDevices(searchTerm).subscribe(
            devices => {
                this.foundDevices = devices;
                console.log(this.foundDevices);
            }
        )
    }
}