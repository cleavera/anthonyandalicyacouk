import { Inject, Injectable } from '@angular/core';
import { Api } from '@skimp/client';
import { ResourceLocation } from '@skimp/core';
import { SCHEMA_REGISTER } from '@skimp/schema';
import { InviteSchema } from 'anthony-and-alicya-domain';
import { BehaviorSubject, Observable } from 'rxjs';

import { API_TOKEN } from '../providers/api/api.token';

@Injectable()
export class InviteService {
    public readonly invite$: Observable<InviteSchema | null>;

    private readonly _api: Api;
    private readonly _inviteSubject: BehaviorSubject<InviteSchema | null>;

    constructor(@Inject(API_TOKEN) api: Api) {
        this._api = api;
        this._inviteSubject = new BehaviorSubject<InviteSchema | null>(null);
        this.invite$ = this._inviteSubject.asObservable();
    }

    public async loadInvite(inviteNumber: number, _invitePin: string): Promise<void> {
        this._inviteSubject.next(await this._api.get(InviteSchema, new ResourceLocation(SCHEMA_REGISTER.getSchemaResourceName(InviteSchema) as string, inviteNumber.toString())));
    }

    public clearInvite(): void {
        this._inviteSubject.next(null);
    }
}
