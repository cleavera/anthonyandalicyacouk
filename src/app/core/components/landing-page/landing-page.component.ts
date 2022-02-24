import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../media/services/banner.service';

@Component({
    templateUrl: './landing-page.component.html',
    styleUrls: ['./landing-page.component.scss']
})
export class LandingPageComponent implements OnInit {
    private readonly _bannerService: BannerService;

    constructor(bannerService: BannerService) {
        this._bannerService = bannerService;
    }

    public ngOnInit(): void {
        this._bannerService.setBanner('Anthony & Alicya', 'assets/home.jpg');
    }
}
