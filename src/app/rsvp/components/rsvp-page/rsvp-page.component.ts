import { Component } from '@angular/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';
import { GuestService } from '../../services/guest.service';
import { InviteService } from '../../services/invite.service';

@Component({
    templateUrl: './rsvp-page.component.html'
})
export class RsvpPageComponent {
    public invite$: Observable<InviteSchema | null>;
    public guests$: Observable<Array<Observable<GuestSchema | null>> | null>;

    private readonly _inviteService: InviteService;
    private readonly _guestService: GuestService;

    constructor(inviteService: InviteService, guestService: GuestService) {
        this._inviteService = inviteService;
        this._guestService = guestService;
        this.invite$ = this._inviteService.invite$;
        this.guests$ = this._guestService.guests$;
    }
}
