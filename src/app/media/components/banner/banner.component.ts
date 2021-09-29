import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'aa-banner',
    styleUrls: ['./banner.component.scss'],
    templateUrl: './banner.component.html'
})
export class BannerComponent {
    @Input()
    public set image(image: string) {
        (this._element.nativeElement as HTMLElement).style.setProperty('--aaBanner-image', `url("${image}")`);
    }

    @Input()
    public title!: string;

    private readonly _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }
}
