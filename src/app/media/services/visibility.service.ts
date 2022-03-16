import { Injectable } from '@angular/core';
import { filter, map, Observable, share, Subject } from 'rxjs';

@Injectable()
export class VisibilityService {
    private readonly _observer: IntersectionObserver;
    private readonly _subject: Subject<{ element: Element; isVisible: boolean; }>;

    constructor() {
        this._subject = new Subject<{ element: Element; isVisible: boolean; }>();

        this._observer = new IntersectionObserver((entries: Array<IntersectionObserverEntry>) => {
            entries.forEach((entry: IntersectionObserverEntry) => {
                this._subject.next({
                    element: entry.target,
                    isVisible: entry.isIntersecting
                });
            });
        });
    }

    public watch(element: Element): Observable<boolean> {
        this._observer.observe(element);

        return this._subject.pipe(
            share(),
            filter((ele: { element: Element; isVisible: boolean; }) => {
                return ele.element === element;
            }),
            map(({ isVisible }: { element: Element; isVisible: boolean; }) => {
                return isVisible;
            })
        );
    }

    public endWatch(element: Element): void {
        this._observer.unobserve(element);
    }
}
