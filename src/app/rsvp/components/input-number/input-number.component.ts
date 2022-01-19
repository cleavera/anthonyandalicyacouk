import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
    selector: 'aa-input-number',
    templateUrl: './input-number.component.html'
})
export class InputNumberComponent implements OnInit {
    @Input()
    public value!: number | null;

    @Input()
    public label!: string;

    @Input()
    public required: boolean = false;

    @Output()
    public valueChange: EventEmitter<number | null> = new EventEmitter<number | null>();

    public id!: string;

    public ngOnInit(): void {
        this.id = `${Date.now()}-${Math.floor(Math.random() * 1000).toString(36)}`;
    }

    public getId(): string {
        return `input-${this.id}`;
    }

    public onInput(event: Event): void {
        this.valueChange.emit(parseInt((event.currentTarget as HTMLSelectElement).value, 10));
    }
}
