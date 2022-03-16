import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    exports: [
        ContentComponent,
        FooterComponent
    ],
    declarations: [
        ContentComponent,
        FooterComponent
    ]
})
export class LayoutModule {
}
