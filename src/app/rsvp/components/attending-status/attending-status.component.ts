import { Component, Input } from '@angular/core';

@Component({
    selector: 'aa-attending-status',
    templateUrl: './attending-status.component.html'
})
export class AttendingStatusComponent {
    @Input()
    public status!: boolean | null;
}
