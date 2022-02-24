import { Component } from '@angular/core';
import { BannerService } from '../../../media/services/banner.service';

@Component({
    templateUrl: './reception-page.component.html'
})
export class ReceptionPageComponent {
    private readonly _bannerService: BannerService;

    constructor(bannerService: BannerService) {
        this._bannerService = bannerService;
    }

    public ngOnInit(): void {
        this._bannerService.setBanner('The reception', 'assets/chequers.jpg');
    }
}
