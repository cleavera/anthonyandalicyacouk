import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'aa-button',
    styleUrls: ['./button.component.scss'],
    templateUrl: './button.component.html'
})
export class ButtonComponent {
    @Input()
    public label!: string;

    @Input()
    public type!: string;

    @Output()
    public activate: EventEmitter<void> = new EventEmitter<void>();

    public onClick(): void {
        this.activate.emit();
    }
}
