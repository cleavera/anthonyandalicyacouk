import { ChangeDetectorRef, Component, ElementRef } from '@angular/core';

import { VisibilityService } from '../../services/visibility.service';

@Component({
    selector: 'aa-divider',
    styleUrls: ['./divider.component.scss'],
    templateUrl: './divider.component.html'
})
export class DividerComponent {
    public visible!: boolean;

    private readonly _element: ElementRef;
    private readonly _visibilityService: VisibilityService;
    private readonly _changeDetectorRef: ChangeDetectorRef;

    constructor(element: ElementRef, visibilityService: VisibilityService, changeDetectorRef: ChangeDetectorRef) {
        this._element = element;
        this._visibilityService = visibilityService;
        this._changeDetectorRef = changeDetectorRef;
    }

    public ngOnInit(): void {
        this.visible = false;

        this._visibilityService.watch(this._element.nativeElement).subscribe((isVisible: boolean) => {
            if (isVisible) {
                this._visibilityService.endWatch(this._element.nativeElement);
                this.visible = true;
                this._changeDetectorRef.markForCheck();
            }
        });
    }

    public ngOnDestroy(): void {
        if (!this.visible) {
            this._visibilityService.endWatch(this._element.nativeElement);
        }
    }
}
