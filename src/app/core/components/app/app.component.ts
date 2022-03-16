import { ChangeDetectionStrategy, Component, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'aa-root',
    templateUrl: './app.component.html',
    styleUrls: ['app.component.scss'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
    public ngOnInit(): void {
        document.body.style.setProperty('--aaAppRoot-overlayImage', 'url(assets/bg.jpg)');
    }
}
