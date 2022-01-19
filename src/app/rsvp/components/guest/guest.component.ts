import { Component, Input } from '@angular/core';
import { MODEL_REGISTER, ResourceLocation } from '@skimp/core';
import { GuestSchema } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-guest',
    templateUrl: './guest.component.html'
})
export class GuestComponent {
    @Input()
    public guest!: GuestSchema;

    public getRoute(): Array<string> | null {
        const location: ResourceLocation | null = MODEL_REGISTER.getLocation(this.guest);

        if (location === null) {
            return null;
        }

        return [
            'edit',
            location.toString()
        ];
    }
}
