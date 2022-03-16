import { Component, EventEmitter, HostBinding, Input, Output } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';
import { filter } from 'rxjs';

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

    constructor(router: Router) {
        router.events.pipe(filter((event: unknown) => {
            return event instanceof NavigationStart;
        })).subscribe(() => {
            this.onClose();
        });
    }

    public onClose(): void {
        this.close.emit();
    }
}
