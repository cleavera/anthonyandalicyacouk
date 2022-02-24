import { ChangeDetectorRef, Component, ElementRef, Input, OnInit } from '@angular/core';
import { BannerInterface } from '../../interfaces/banner.interface';
import { BannerService } from '../../services/banner.service';

@Component({
    selector: 'aa-banner',
    styleUrls: ['./banner.component.scss'],
    templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
    public set image(image: string | null) {
        if (image === null) {
            (this._element.nativeElement as HTMLElement).style.setProperty('--aaBanner-image', '');
        } else {
            (this._element.nativeElement as HTMLElement).style.setProperty('--aaBanner-image', `url("${image}")`);
        }
    }

    public title: string | null = null;

    private readonly _element: ElementRef;
    private readonly _bannerService: BannerService;
    private readonly _changeDetectorRef: ChangeDetectorRef;

    constructor(element: ElementRef, bannerService: BannerService, changeDetectorRef: ChangeDetectorRef) {
        this._element = element;
        this._bannerService = bannerService;
        this._changeDetectorRef = changeDetectorRef;
    }

    public ngOnInit(): void {
        (this._element.nativeElement as HTMLElement).style.setProperty('--aaBanner-overlayImage', 'url(assets/bg.jpg)');

        this._bannerService.banner$.subscribe((banner: BannerInterface | null) => {
            if (banner === null) {
                this.image = null;
                this.title = null;
            } else {
                this.image = banner.image;
                this.title = banner.title;
            }

            this._changeDetectorRef.markForCheck();
        });
    }
}
