import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { AttendingStatusComponent } from './components/attending-status/attending-status.component';
import { GuestTypeComponent } from './components/guest-type/guest-type.component';
import { GuestComponent } from './components/guest/guest.component';
import { InputOptionsComponent } from './components/input-options/input-options.component';
import { InviteDetailsComponent } from './components/invite-details/invite-details.component';
import { InviteComponent } from './components/invite/invite.component';
import { ManageGuestComponent } from './components/manage-guest/manage-guest.component';
import { MenuComponent } from './components/menu/menu.component';
import { RsvpPageComponent } from './components/rsvp-page/rsvp-page.component';
import { TranslatePipe } from './pipes/translate.pipe';
import { API_PROVIDER } from './providers/api/api.provider';
import { RsvpRoutingModule } from './rsvp-routing.module';
import { GuestService } from './services/guest.service';
import { InviteService } from './services/invite.service';

@NgModule({
    exports: [],
    declarations: [
        AttendingStatusComponent,
        GuestComponent,
        GuestTypeComponent,
        InputOptionsComponent,
        InviteComponent,
        InviteDetailsComponent,
        ManageGuestComponent,
        MenuComponent,
        RsvpPageComponent,
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
