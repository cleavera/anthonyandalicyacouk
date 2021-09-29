import { NgModule } from '@angular/core';
import { LayoutModule } from '../layout/layout.module';

import { MediaModule } from '../media/media.module';
import { CeremonyPageComponent } from './components/ceremony-page/ceremony-page.component';
import { CeremonyRoutingModule } from './ceremony-routing.module';

@NgModule({
    exports: [],
    declarations: [CeremonyPageComponent],
    imports: [
        CeremonyRoutingModule,
        LayoutModule,
        MediaModule
    ]
})
export class CeremonyModule {
}
