import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

import { NAVBAR_MENU_ITEMS } from 'src/app/state/utils/static';

import { OnlyTitleModel } from 'src/app/state/model/only-title.model';

@Component({
    selector: 'app-innovic-header',
    templateUrl: './innovic-header.component.html',
    styleUrls: ['./innovic-header.component.scss'],
})
export class InnovicHeaderComponent {
    public navbarMenuItems: OnlyTitleModel[] = [];

    public displayDropdown: boolean = false;

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.getNavbarMenuItems();

        this.closeDropdownOnRouteChange();
    }

    public trackByIdentity = (index: number, _: any): number => index;

    private getNavbarMenuItems(): void {
        this.navbarMenuItems = NAVBAR_MENU_ITEMS;
    }

    public handleDropdownClick(): void {
        this.displayDropdown = !this.displayDropdown;
    }

    private closeDropdownOnRouteChange(): void {
        this.router.events.subscribe((event) => {
            if (event instanceof NavigationStart) {
                this.displayDropdown = false;
            }
        });
    }
}
