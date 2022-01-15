import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { LayoutModule } from '../layout/layout.module';
import { MediaModule } from '../media/media.module';
import { GuestTypeComponent } from './components/guest-type/guest-type.component';
import { GuestComponent } from './components/guest/guest.component';
import { InviteDetailsComponent } from './components/invite-details/invite-details.component';
import { InviteComponent } from './components/invite/invite.component';
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
        GuestComponent,
        GuestTypeComponent,
        InviteComponent,
        InviteDetailsComponent,
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
        InviteService
    ]
})
export class RsvpModule {
}
