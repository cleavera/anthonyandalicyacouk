import { Component, Input } from '@angular/core';
import { GuestTypes } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-guest-type',
    styleUrls: ['./guest-type.component.scss'],
    templateUrl: './guest-type.component.html'
})
export class GuestTypeComponent {
    private static readonly classNameMap: Record<GuestTypes, string> = {
        [GuestTypes.DAY]: 'GuestType-day',
        [GuestTypes.EVENING]: 'GuestType-evening'
    };

    @Input()
    public set guestType(type: string) {
        this.type = type as GuestTypes;
        this.className = GuestTypeComponent.classNameMap[this.type];
    }

    public type!: GuestTypes;
    public className!: string;
}
