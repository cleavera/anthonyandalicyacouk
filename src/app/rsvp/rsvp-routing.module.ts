import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManageGuestPageComponent } from './components/manage-guest-page/manage-guest-page.component';

import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';

const routes: Routes = [
    {
        path: '',
        component: RsvpPageComponent
    },
    {
        path: 'edit/:id',
        component: ManageGuestPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RsvpRoutingModule {
}
