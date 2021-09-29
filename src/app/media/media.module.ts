import { NgModule } from '@angular/core';
import { BannerComponent } from './components/banner/banner.component';

import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';

@NgModule({
    exports: [
        BannerComponent,
        CloseIconComponent,
        HamburgerIconComponent
    ],
    declarations: [
        BannerComponent,
        CloseIconComponent,
        HamburgerIconComponent
    ]
})
export class MediaModule {
}
