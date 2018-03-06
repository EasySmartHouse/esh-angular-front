import { Component, Input } from '@angular/core'

@Component({
    selector: 'space-thumbnail',
    template: `
    <div class="well hoverwell thumbnail">
        <h2>{{space.name}}</h2>
        <div>
            <img src="{{space.imageUrl}}" alt="{{space.name}}" />
        </div>
    </div>
`
})
export class SpaceThumbnailComponent {
    @Input() space:any
}