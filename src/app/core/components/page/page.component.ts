import { Component } from '@angular/core';

import { FADE_ANIMATION } from '../../animations/fade.animation';

@Component({
    animations: [FADE_ANIMATION],
    selector: 'aa-page',
    templateUrl: './page.component.html'
})
export class PageComponent {}
