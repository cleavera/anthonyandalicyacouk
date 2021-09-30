import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { RsvpRoutingModule } from './rsvp-routing.module';

@NgModule({
    exports: [],
    declarations: [RsvpPageComponent],
    imports: [
        LayoutModule,
        MediaModule,
        RsvpRoutingModule
    ]
})
export class RsvpModule {
}
