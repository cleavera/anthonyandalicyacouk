import { NgModule } from '@angular/core';

import { ContentComponent } from './components/content/content.component';

@NgModule({
    exports: [ContentComponent],
    declarations: [ContentComponent]
})
export class LayoutModule {
}
