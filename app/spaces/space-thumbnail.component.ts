import { Component, Input } from '@angular/core'
import { ISpace } from './index';

@Component({
    selector: 'space-thumbnail',
    template: `
    <div [routerLink]="['/spaces', space.id]" class="well hoverwell thumbnail">
        <h2>{{space.name}}</h2>
        <div [hidden]="!space.image">
            <img src="{{space.image}}" alt="{{space.name}}" />
        </div>
    </div> 
`,
    styles: [`
        .thumbnail { min-height: 210px; }
        img {
            display: block;
            max-height:100px;
            max-width:100px;
            width: auto;
            height: auto;
        }
    `]
})
export class SpaceThumbnailComponent {
    @Input() space:ISpace
}