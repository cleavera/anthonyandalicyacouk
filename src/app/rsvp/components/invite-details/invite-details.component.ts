import { Component } from '@angular/core';

import { ErrorMessage } from '../../constants/error-message.constant';
import { InviteService } from '../../services/invite.service';

@Component({
    selector: 'aa-invite-details',
    templateUrl: './invite-details.component.html'
})
export class InviteDetailsComponent {
    public inviteNumber: number | null;
    public pin: string | null;
    public errorMessage: string | null;

    private readonly _inviteService: InviteService;

    constructor(inviteService: InviteService) {
        this._inviteService = inviteService;

        this.inviteNumber = null;
        this.pin = null;
        this.errorMessage = null;
    }

    public async onSubmit(event: Event): Promise<void> {
        event.preventDefault();

        if (this.inviteNumber === null || this.pin === null) {
            return;
        }

        try {
            await this._inviteService.loadInvite(this.inviteNumber, this.pin);
        } catch (e) {
            this.errorMessage = ErrorMessage.INCORRECT_DETAILS;
        }
    }

    public onInviteNumberChange(event: Event): void {
        this.inviteNumber = parseInt((event.currentTarget as HTMLInputElement).value, 10);
    }

    public onPinChange(event: Event): void {
        this.pin = (event.currentTarget as HTMLInputElement).value;
    }
}
