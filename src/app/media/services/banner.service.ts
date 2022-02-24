import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

import { BannerInterface } from '../interfaces/banner.interface';

@Injectable()
export class BannerService {
    public readonly banner$: Observable<BannerInterface | null>;

    private readonly _bannerSubject: BehaviorSubject<BannerInterface | null>;

    constructor() {
        this._bannerSubject = new BehaviorSubject<BannerInterface | null>(null);
        this.banner$ = this._bannerSubject.asObservable();
    }

    public setBanner(title: string, image: string): void {
        this._bannerSubject.next({
            title,
            image
        });
    }
}
