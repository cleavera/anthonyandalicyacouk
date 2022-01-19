import { Component, Input } from '@angular/core';
import { GuestSchema } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-manage-guest',
    templateUrl: './manage-guest.component.html'
})
export class ManageGuestComponent {
    @Input()
    public guest!: GuestSchema;
}
