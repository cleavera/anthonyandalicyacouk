import { Component, ElementRef, Input } from '@angular/core';

@Component({
    selector: 'aa-banner-image',
    styleUrls: ['./banner-image.component.scss'],
    templateUrl: './banner-image.component.html'
})
export class BannerImageComponent {
    @Input()
    public title: string | null = null;

    @Input()
    public set image(image: string | null) {
        if (image === null) {
            (this._element.nativeElement as HTMLElement).style.setProperty('--aaBannerImage-image', '');
        } else {
            (this._element.nativeElement as HTMLElement).style.setProperty('--aaBannerImage-image', `url("${image}")`);
        }
    }

    private readonly _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }
}
