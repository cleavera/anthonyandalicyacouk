import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'aa-input-text',
    styleUrls: ['./input-text.component.scss'],
    templateUrl: './input-text.component.html'
})
export class InputTextComponent implements OnInit {
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
        this.valueChange.emit((event.currentTarget as HTMLDivElement).innerText || null);
    }
}
