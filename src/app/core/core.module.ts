import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { APP_BASE_PATH } from '../../environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { BannerService } from '../media/services/banner.service';
import { AppComponent } from './components/app/app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageComponent } from './components/page/page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LandingPageComponent,
        NavigationComponent,
        PageComponent,
        TopBarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        BrowserAnimationsModule,
        CoreRoutingModule,
        LayoutModule,
        MediaModule
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: APP_BASE_PATH
        },
        BannerService
    ]
})
export class CoreModule {
}
