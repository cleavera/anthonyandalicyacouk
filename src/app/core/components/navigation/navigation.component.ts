import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';

@Component({
    selector: 'aa-navigation',
    styleUrls: ['./navigation.component.scss'],
    templateUrl: './navigation.component.html'
})
export class NavigationComponent {
    @Input()
    @HostBinding('class.isOpen')
    public isOpen: boolean = false;

    @Output()
    public close: EventEmitter<void> = new EventEmitter<void>();

    public onClose(): void {
        this.close.emit();
    }
}