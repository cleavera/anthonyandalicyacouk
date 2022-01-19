import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { OptionInterface } from '../../interfaces/option.interface';

@Component({
    selector: 'aa-input-options',
    templateUrl: './input-options.component.html'
})
export class InputOptionsComponent<T = unknown> implements OnInit {
    @Input()
    public options!: Array<OptionInterface>;

    @Input()
    public value!: T;

    @Input()
    public label!: string;

    @Output()
    public valueChange: EventEmitter<T> = new EventEmitter<T>();

    public id!: string;

    public ngOnInit(): void {
        this.id = `${Date.now()}-${Math.floor(Math.random() * 1000).toString(36)}`;
    }

    public getId(index: number): string {
        return `${this.getName()}-${index}`;
    }

    public getName(): string {
        return `input-${this.id}`;
    }

    public onInput(event: Event): void {
        this.valueChange.emit(this.options[parseInt((event.currentTarget as HTMLSelectElement).value, 10)].value as T);
    }
}
