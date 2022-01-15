import { Inject, Injectable } from '@angular/core';
import { Api } from '@skimp/client';
import { MODEL_REGISTER, ResourceLocation } from '@skimp/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

import { API_TOKEN } from '../providers/api/api.token';
import { InviteService } from './invite.service';

@Injectable()
export class GuestService {
    public readonly guests$: Observable<Array<Observable<GuestSchema | null>> | null>;

    private readonly _api: Api;
    private readonly _cache: Record<string, Subject<GuestSchema | null>>;
    private readonly _guestSubject: BehaviorSubject<Array<Observable<GuestSchema | null>> | null>;
    private readonly _inviteService: InviteService;

    constructor(@Inject(API_TOKEN) api: Api, inviteService: InviteService) {
        this._api = api;
        this._inviteService = inviteService;
        this._cache = {};
        this._guestSubject = new BehaviorSubject<Array<Observable<GuestSchema | null>> | null>(null);
        this.guests$ = this._guestSubject.asObservable();

        this._watchInvites();
    }

    public async load(location: ResourceLocation): Promise<void> {
        this._get(location).next(await this._api.get(GuestSchema, location));
    }

    public async loadGuests(guestLocations: Array<ResourceLocation>): Promise<void> {
        const guests: Array<Observable<GuestSchema | null>> = guestLocations.map((guestLocation: ResourceLocation) => {
            return this._get(guestLocation);
        });

        await Promise.all(guestLocations.map(async(guestLocation: ResourceLocation): Promise<void> => {
            return this.load(guestLocation);
        }));

        this._guestSubject.next(guests);
    }

    private _get(location: ResourceLocation): Subject<GuestSchema | null> {
        if (!(location.toString() in this._cache)) {
            this._cache[location.toString()] = new BehaviorSubject<GuestSchema | null>(null);
        }

        return this._cache[location.toString()];
    }

    private _watchInvites(): void {
        this._inviteService.invite$.subscribe((invite: InviteSchema | null) => {
            if (invite === null) {
                return;
            }

            this.loadGuests(MODEL_REGISTER.getRelationships(invite)).catch((e: Error) => {
                throw e;
            });
        });
    }
}
