import { NgModule } from '@angular/core';

import { MediaModule } from '../media/media.module';
import { CeremonyPageComponent } from './components/ceremony-page/ceremony-page.component';
import { CeremonyRoutingModule } from './ceremony-routing.module';

@NgModule({
    exports: [],
    declarations: [CeremonyPageComponent],
    imports: [
        MediaModule,
        CeremonyRoutingModule
    ]
})
export class CeremonyModule {
}
