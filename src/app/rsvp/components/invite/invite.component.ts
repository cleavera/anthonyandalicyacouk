import { Component, Input } from '@angular/core';
import { GuestSchema } from 'anthony-and-alicya-domain';
import { Observable } from 'rxjs';

@Component({
    selector: 'aa-invite',
    templateUrl: './invite.component.html'
})
export class InviteComponent {
    @Input()
    public guests!: Array<Observable<GuestSchema | null>> | null;
}
