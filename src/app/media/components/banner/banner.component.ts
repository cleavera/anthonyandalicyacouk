import { Component, ElementRef, Input, OnInit } from '@angular/core';

@Component({
    selector: 'aa-banner',
    styleUrls: ['./banner.component.scss'],
    templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
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

    public ngOnInit(): void {
        (this._element.nativeElement as HTMLElement).style.setProperty('--aaBanner-overlayImage', 'url(assets/bg.jpg)');
    }
}
