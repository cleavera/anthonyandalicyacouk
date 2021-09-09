import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VenuePageComponent } from './components/venue-page/venue-page.component';

const routes: Routes = [
    {
        path: '',
        component: VenuePageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class VenueRoutingModule {
}
