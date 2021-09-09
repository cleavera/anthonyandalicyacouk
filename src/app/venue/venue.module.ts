import { NgModule } from '@angular/core';

import { VenuePageComponent } from './components/venue-page/venue-page.component';
import { VenueRoutingModule } from './venue-routing.module';

@NgModule({
    exports: [],
    declarations: [VenuePageComponent],
    imports: [VenueRoutingModule]
})
export class VenueModule {
}
