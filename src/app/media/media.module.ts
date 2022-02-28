import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { DividerComponent } from './components/divider/divider.component';
import { HamburgerIconComponent } from './components/hamburger-icon/hamburger-icon.component';
import { LineComponent } from './components/line/line.component';
import { LoadingComponent } from './components/loading/loading.component';
import { VisibilityService } from './services/visibility.service';

@NgModule({
    exports: [
        BannerComponent,
        CloseIconComponent,
        DividerComponent,
        HamburgerIconComponent,
        LineComponent,
        LoadingComponent
    ],
    declarations: [
        BannerComponent,
        BannerImageComponent,
        CloseIconComponent,
        DividerComponent,
        HamburgerIconComponent,
        LineComponent,
        LoadingComponent
    ],
    imports: [CommonModule],
    providers: [VisibilityService]
})
export class MediaModule {
}
