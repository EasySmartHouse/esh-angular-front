import { Component } from '@angular/core'

@Component({
    selector: 'spaces-list',
    template: `
    <div>
        <h1>Current spaces</h1>
        <hr/>
        <space-thumbnail [space]="space1"></space-thumbnail>
    </div>
    `
})
export class SpacesListComponent {
    space1 = {
        id: 1,
        name: "Guest room",
        imageUrl: '/app/assets/images/basic-shield.png'
    }
}