import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { ReceptionPageComponent } from './components/reception-page/reception-page.component';
import { ReceptionRoutingModule } from './reception-routing.module';

@NgModule({
    exports: [],
    declarations: [ReceptionPageComponent],
    imports: [
        LayoutModule,
        MediaModule,
        ReceptionRoutingModule
    ]
})
export class ReceptionModule {
}
