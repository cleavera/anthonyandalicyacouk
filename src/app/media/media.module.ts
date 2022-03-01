import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AddressComponent } from './components/address/address.component';
import { BannerImageComponent } from './components/banner-image/banner-image.component';
import { BannerComponent } from './components/banner/banner.component';
import { CloseIconComponent } from './components/close-icon/close-icon.component';
import { CountdownComponent } from './components/countdown/countdown.component';
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
        LoadingComponent,
        AddressComponent,
        CountdownComponent
    ],
    declarations: [
        BannerComponent,
        BannerImageComponent,
        CloseIconComponent,
        CountdownComponent,
        DividerComponent,
        HamburgerIconComponent,
        LineComponent,
        LoadingComponent,
        AddressComponent
    ],
    imports: [CommonModule],
    providers: [VisibilityService]
})
export class MediaModule {
}
