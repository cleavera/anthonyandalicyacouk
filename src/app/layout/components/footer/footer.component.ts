import { Component, ElementRef } from '@angular/core';

@Component({
    selector: 'aa-footer',
    styleUrls: ['./footer.component.scss'],
    templateUrl: './footer.component.html'
})
export class FooterComponent {
    private readonly _element: ElementRef;

    constructor(element: ElementRef) {
        this._element = element;
    }

    public ngOnInit(): void {
        (this._element.nativeElement as HTMLElement).style.setProperty('--aaFooter-overlayImage', 'url(assets/bg.jpg)');
    }
}
