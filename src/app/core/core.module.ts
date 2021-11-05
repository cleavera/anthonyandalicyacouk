import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { APP_BASE_PATH } from '../../environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { AppComponent } from './components/app/app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { LineComponent } from './components/line/line.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { PageComponent } from './components/page/page.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { CoreRoutingModule } from './core-routing.module';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LandingPageComponent,
        LineComponent,
        NavigationComponent,
        PageComponent,
        TopBarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule,
        CoreRoutingModule,
        LayoutModule,
        MediaModule
    ],
    providers: [
        {
            provide: APP_BASE_HREF,
            useValue: APP_BASE_PATH
        }
    ]
})
export class CoreModule {
}
