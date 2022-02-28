import { animate, group, query, style, transition, trigger } from '@angular/animations';
import { ChangeDetectorRef, Component, ElementRef, OnInit } from '@angular/core';

import { BannerInterface } from '../../interfaces/banner.interface';
import { BannerService } from '../../services/banner.service';

@Component({
    animations: [
        trigger('fadeAnimation', [
            transition('* => *', [
                query(':enter', [
                    style({
                        opacity: 0
                    })
                ], {
                    optional: true
                }),
                group([
                    query(':leave', [
                        style({
                            opacity: 1
                        }),
                        animate('0.6s', style({
                            opacity: 0
                        }))
                    ], {
                        optional: true
                    }),
                    query(':enter', [
                        style({
                            opacity: 0
                        }),
                        animate('0.6s', style({
                            opacity: 1
                        }))
                    ], {
                        optional: true
                    })
                ])
            ])
        ])
    ],
    selector: 'aa-banner',
    styleUrls: ['./banner.component.scss'],
    templateUrl: './banner.component.html'
})
export class BannerComponent implements OnInit {
    public title: string | null = null;
    public image: string | null = null;
    public title2: string | null = null;
    public image2: string | null = null;

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
                this.image2 = null;
                this.title = null;
                this.title2 = null;
            } else if (this.title === null) {
                this.image = banner.image;
                this.image2 = null;
                this.title = banner.title;
                this.title2 = null;
            } else if (this.title2 === null) {
                this.image = null;
                this.image2 = banner.image;
                this.title = null;
                this.title2 = banner.title;
            }

            this._changeDetectorRef.markForCheck();
        });
    }

    public getAnimationName(): string {
        return (this.title === null) ? 'second' : 'first';
    }
}
