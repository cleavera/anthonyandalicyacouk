import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';

@Component({
    selector: 'aa-address',
    styleUrls: ['./address.component.scss'],
    templateUrl: './address.component.html'
})
export class AddressComponent {
    @Input()
    public link!: string;

    public get trustedLink(): SafeResourceUrl {
        return this._domSanitizer.bypassSecurityTrustResourceUrl(this.link);
    }

    private readonly _domSanitizer: DomSanitizer;

    constructor(domSanitizer: DomSanitizer) {
        this._domSanitizer = domSanitizer;

    }
}