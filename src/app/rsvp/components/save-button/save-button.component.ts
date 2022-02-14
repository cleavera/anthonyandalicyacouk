import { Component, Input } from '@angular/core';

@Component({
    selector: 'aa-save-button',
    styleUrls: ['./save-button.component.scss'],
    templateUrl: './save-button.component.html'
})
export class SaveButtonComponent {
    @Input()
    public label!: string;
}
