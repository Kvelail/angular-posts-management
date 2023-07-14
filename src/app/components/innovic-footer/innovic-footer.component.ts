import { Component } from '@angular/core';

import { NAVBAR_MENU_ITEMS } from 'src/app/state/utils/static';

import { OnlyTitleModel } from 'src/app/state/model/only-title.model';

@Component({
    selector: 'app-innovic-footer',
    templateUrl: './innovic-footer.component.html',
    styleUrls: ['./innovic-footer.component.scss'],
})
export class InnovicFooterComponent {
    public copyrightYear: number | null = null;

    public navbarMenuItems: OnlyTitleModel[] = [];

    ngOnInit(): void {
        this.getNavbarMenuItemsAndFullYear();
    }

    public trackByIdentity = (index: number, _: any): number => index;

    private getNavbarMenuItemsAndFullYear(): void {
        this.navbarMenuItems = NAVBAR_MENU_ITEMS;

        this.copyrightYear = new Date().getFullYear();
    }
}
