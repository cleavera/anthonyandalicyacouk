import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { AttendingStatusComponent } from './components/attending-status/attending-status.component';
import { ButtonComponent } from './components/button/button.component';
import { GuestTypeComponent } from './components/guest-type/guest-type.component';
import { GuestComponent } from './components/guest/guest.component';
import { InputDishComponent } from './components/input-dish/input-dish.component';
import { InputNumberComponent } from './components/input-number/input-number.component';
import { InputOptionsComponent } from './components/input-options/input-options.component';
import { InputStringComponent } from './components/input-string/input-string.component';
import { InviteDetailsComponent } from './components/invite-details/invite-details.component';
import { InviteComponent } from './components/invite/invite.component';
import { ManageGuestComponent } from './components/manage-guest/manage-guest.component';
import { MenuComponent } from './components/menu/menu.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { SaveButtonComponent } from './components/save-button/save-button.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { API_PROVIDER } from './providers/api/api.provider';
import { RsvpRoutingModule } from './rsvp-routing.module';
import { GuestService } from './services/guest.service';
import { InviteService } from './services/invite.service';

@NgModule({
    exports: [],
    declarations: [
        AttendingStatusComponent,
        ButtonComponent,
        GuestComponent,
        GuestTypeComponent,
        InputDishComponent,
        InputOptionsComponent,
        InputNumberComponent,
        InputStringComponent,
        InviteComponent,
        InviteDetailsComponent,
        ManageGuestComponent,
        MenuComponent,
        RsvpPageComponent,
        SaveButtonComponent,
        TranslatePipe
    ],
    imports: [
        CommonModule,
        LayoutModule,
        MediaModule,
        RsvpRoutingModule
    ],
    providers: [
        API_PROVIDER,
        GuestService,
        InviteService,
        TranslatePipe
    ]
})
export class RsvpModule {
}
