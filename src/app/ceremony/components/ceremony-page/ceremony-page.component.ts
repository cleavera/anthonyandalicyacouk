import { Component, OnInit } from '@angular/core';
import { BannerService } from '../../../media/services/banner.service';

@Component({
    templateUrl: './ceremony-page.component.html'
})
export class CeremonyPageComponent implements OnInit {
    private readonly _bannerService: BannerService;

    constructor(bannerService: BannerService) {
        this._bannerService = bannerService;
    }

    public ngOnInit(): void {
        this._bannerService.setBanner('The ceremony', 'assets/good-shepherd.jpg');
    }
}
