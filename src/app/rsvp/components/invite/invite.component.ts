import { Component, Input } from '@angular/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';

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

    public onEdit(guest: GuestSchema): void {
        this.editing = guest;
    }

    public onFinishEditing(): void {
        this.editing = null;
    }
}
