import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GuestSchema, InviteSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';

@Component({
    selector: 'aa-invite',
    styleUrls: ['./invite.component.scss'],
    templateUrl: './invite.component.html'
})
export class InviteComponent implements OnInit {
    @Input()
    public invite!: InviteSchema;

    @Input()
    public guests!: Array<Observable<GuestSchema | null>> | null;

    @Output()
    public aaScrollTop: EventEmitter<void> = new EventEmitter<void>();

    @Output()
    public clearInvite: EventEmitter<void> = new EventEmitter<void>();

    public editing: GuestSchema | null = null;

    public ngOnInit(): void {
        this.aaScrollTop.emit();
    }

    public onEdit(guest: GuestSchema): void {
        this.editing = guest;

        this.aaScrollTop.emit();
    }

    public onFinishEditing(): void {
        this.editing = null;

        this.aaScrollTop.emit();
    }

    public onClearInvite(): void {
        this.clearInvite.emit();
    }
}
