import { NgModule } from '@angular/core';

import { BannerComponent } from './components/banner/banner.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { DividerComponent } from './components/divider/divider.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';
import { LineComponent } from './components/line/line.component';

@NgModule({
    exports: [
        BannerComponent,
        CloseIconComponent,
        DividerComponent,
        HamburgerIconComponent,
        LineComponent
    ],
    declarations: [
        BannerComponent,
        CloseIconComponent,
        DividerComponent,
        HamburgerIconComponent,
        LineComponent
    ]
})
export class MediaModule {
}
