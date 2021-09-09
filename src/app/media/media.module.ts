import { NgModule } from '@angular/core';

import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';

@NgModule({
    exports: [
        CloseIconComponent,
        HamburgerIconComponent
    ],
    declarations: [
        CloseIconComponent,
        HamburgerIconComponent
    ]
})
export class MediaModule {
}
