import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'aa-top-bar',
    templateUrl: './top-bar.component.html',
    styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent {
    public openMenu: boolean = false;

    public onClose(): void {
        this.openMenu = false;
    }

    public toggleMenu(): void {
        this.openMenu = !this.openMenu;
    }
}
