import { NgModule } from '@angular/core';

import { MediaModule } from '../media/media.module';
import { ReceptionPageComponent } from './components/reception-page/reception-page.component';
import { ReceptionRoutingModule } from './reception-routing.module';

@NgModule({
    exports: [],
    declarations: [ReceptionPageComponent],
    imports: [
        MediaModule,
        ReceptionRoutingModule
    ]
})
export class ReceptionModule {
}
