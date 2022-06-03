import { Pipe, PipeTransform } from '@angular/core';
import { GuestSchema, GuestTypes } from 'anthony-and-alicya-domain';

@Pipe({
    name: 'isDayGuest'
})
export class IsDayGuestPipe implements PipeTransform {
    public transform(guest: GuestSchema): boolean {
        return guest.type === GuestTypes.DAY;
    }
}
