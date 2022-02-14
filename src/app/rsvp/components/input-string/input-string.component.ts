import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'aa-input-string',
    styleUrls: ['./input-string.component.scss'],
    templateUrl: './input-string.component.html'
})
export class InputStringComponent implements OnInit {
    @Input()
    public value!: string | null;

    @Input()
    public label!: string;

    @Input()
    public required: boolean = false;

    @Output()
    public valueChange: EventEmitter<string | null> = new EventEmitter<string | null>();

    public id!: string;

    public ngOnInit(): void {
        this.id = `${Date.now()}-${Math.floor(Math.random() * 1000).toString(36)}`;
    }

    public getId(): string {
        return `input-${this.id}`;
    }

    public onInput(event: Event): void {
        this.valueChange.emit((event.currentTarget as HTMLSelectElement).value || null);
    }
}
