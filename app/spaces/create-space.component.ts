import { Component } from '@angular/core'
import { Router } from '@angular/router';
import { SpaceService } from './shared/index';

@Component({
    templateUrl: "app/spaces/create-space.component.html",
    styles: [`
        em {float:right; color:#E05C64; padding-left: 10px}
        .error input {background-color: #E3C3C5;}
        .error ::-webkit-input-placeholder { color: #999; }
        .error ::-moz-placeholder { color: #999; }
        .error :-moz-placeholder { color: #999; }
        .error :ms-input-placeholder { color: #999; }
  `]
})
export class CreateSpaceComponent {
    isDirty:boolean = true
    constructor(private router: Router, 
        private spaceService:SpaceService){
    }

    saveSpace(formValues){
        this.spaceService.saveSpace(formValues)
        this.isDirty = false
        this.router.navigate(['/spaces'])
    }

    cancel(){
        this.router.navigate(['/spaces'])
    }

}