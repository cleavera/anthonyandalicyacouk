import { Component } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ResourceLocation } from '@skimp/core';
import { GuestSchema } from 'anthony-and-alicya-domain';
import { Observable, of, switchMap } from 'rxjs';

import { GuestService } from '../../services/guest.service';

@Component({
    templateUrl: './manage-guest-page.component.html'
})
export class ManageGuestPageComponent {
    public guest$: Observable<GuestSchema | null>;

    constructor(route: ActivatedRoute, guestService: GuestService) {
        this.guest$ = route.params.pipe(switchMap(({ id }: Params): Observable<GuestSchema | null> => {
            if (id === null) {
                return of(null);
            }

            return guestService.getGuest(ResourceLocation.FromString(id));
        }));
    }
}
