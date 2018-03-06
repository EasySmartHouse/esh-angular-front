import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { ESHAppComponent } from './esh-app.component'
import { SpacesListComponent } from './spaces/spaces-list.component';
import { SpaceThumbnailComponent } from './spaces/space-thumbnail.component'

@NgModule({
    imports: [BrowserModule],
    declarations: [
        ESHAppComponent,
        SpacesListComponent,
        SpaceThumbnailComponent
    ],
    bootstrap: [ESHAppComponent]
})
export class ESHAppModule {
}