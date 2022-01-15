import { Component, Input } from '@angular/core';
import { GuestSchema } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-guest',
    templateUrl: './guest.component.html'
})
export class GuestComponent {
    @Input()
    public guest!: GuestSchema;
}
