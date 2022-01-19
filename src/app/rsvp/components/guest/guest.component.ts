import { Component, EventEmitter, Input, Output } from '@angular/core';
import { GuestSchema } from 'anthony-and-alicya-domain';

@Component({
    selector: 'aa-guest',
    templateUrl: './guest.component.html'
})
export class GuestComponent {
    @Input()
    public guest!: GuestSchema;

    @Output()
    public edit: EventEmitter<void> = new EventEmitter<void>();

    public onEdit(): void {
        this.edit.emit();
    }
}
