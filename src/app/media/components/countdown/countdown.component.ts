import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'aa-countdown',
    styleUrls: ['./countdown.component.scss'],
    templateUrl: 'countdown.component.html'
})
export class CountdownComponent implements OnInit {
    public daysLeft!: number;

    public ngOnInit(): void {
        this.daysLeft = Math.ceil((new Date('2022-10-22').getTime() - Date.now()) / (1000 * 60 * 60 * 24));
    }
}
