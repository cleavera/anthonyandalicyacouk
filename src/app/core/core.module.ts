import { APP_BASE_HREF } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_PATH } from '../../environments/environment';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from './components/app/app.component';
import { LineComponent } from './components/line/line.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';

@NgModule({
    bootstrap: [AppComponent],
    declarations: [
        AppComponent,
        LineComponent,
        NavigationComponent,
        TopBarComponent
    ],
    imports: [
        AppRoutingModule,
        BrowserModule
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