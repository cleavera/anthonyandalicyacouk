import { Component, Input } from '@angular/core';
import { GuestSchema, Starters } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-menu',
    templateUrl: './menu.component.html'
})
export class MenuComponent {
    @Input()
    public starter!: string | null;

    @Input()
    public main!: string | null;

    @Input()
    public dessert!: string | null;
}
