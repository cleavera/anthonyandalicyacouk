import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
    ]
})
export class CoreModule {
}