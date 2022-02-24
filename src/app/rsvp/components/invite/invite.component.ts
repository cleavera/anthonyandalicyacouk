import { Component, Input } from '@angular/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';
import { InviteService } from '../../services/invite.service';

@Component({
    selector: 'aa-invite',
    styleUrls: ['./invite.component.scss'],
    templateUrl: './invite.component.html'
})
export class InviteComponent {
    @Input()
    public invite!: InviteSchema;

    @Input()
    public guests!: Array<Observable<GuestSchema | null>> | null;

    public editing: GuestSchema | null = null;

    private _inviteService: InviteService;

    constructor(inviteService: InviteService) {
        this._inviteService = inviteService;
    }

    public onEdit(guest: GuestSchema): void {
        this.editing = guest;
    }

    public onFinishEditing(): void {
        this.editing = null;
    }

    public onClearInvite(): void {
        this._inviteService.clearInvite();
    }
}
