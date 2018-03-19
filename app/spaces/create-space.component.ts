import { Component } from '@angular/core'
import { Router } from '@angular/router';

@Component({
    template:`
    <h1>New Space</h1>
    <hr>
    <div class="col-md-6">
        <h3>[Create Space Form]</h3>
        <br/>
        <br/>
        <button type="submit" class="btn btn-primary">Save</button>
        <button type = "button" class="btn btn-default" (click)="cancel()">Cancel</button>
    </div>`
})
export class CreateSpaceComponent {
    constructor(private router: Router){
        
    }

    cancel(){
        this.router.navigate(['/spaces']);
    }


}