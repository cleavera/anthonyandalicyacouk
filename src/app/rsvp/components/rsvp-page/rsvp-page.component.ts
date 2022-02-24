import { Component, OnInit } from '@angular/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';
import { BannerService } from '../../../media/services/banner.service';
import { GuestService } from '../../services/guest.service';
import { InviteService } from '../../services/invite.service';

@Component({
    templateUrl: './rsvp-page.component.html'
})
export class RsvpPageComponent implements OnInit {
    public invite$: Observable<InviteSchema | null>;
    public guests$: Observable<Array<Observable<GuestSchema | null>> | null>;

    private readonly _inviteService: InviteService;
    private readonly _guestService: GuestService;
    private readonly _bannerService: BannerService;

    constructor(inviteService: InviteService, guestService: GuestService, bannerService: BannerService) {
        this._inviteService = inviteService;
        this._guestService = guestService;
        this.invite$ = this._inviteService.invite$;
        this.guests$ = this._guestService.guests$;
        this._bannerService = bannerService;
    }

    public ngOnInit(): void {
        this._bannerService.setBanner('RSVP', 'assets/rsvp.jpg');
    }
}
