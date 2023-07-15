import { Component } from '@angular/core';

import { NAVBAR_MENU_ITEMS } from 'src/app/state/utils/static';

@Component({
    selector: 'app-innovic-footer',
    templateUrl: './innovic-footer.component.html',
    styleUrls: ['./innovic-footer.component.scss'],
})
export class InnovicFooterComponent {
    public copyrightYear: number | null = null;

    ngOnInit(): void {
        this.getFullYear();
    }

    public trackByIdentity = (index: number, _: any): number => index;

    private getFullYear(): void {
        this.copyrightYear = new Date().getFullYear();
    }
}
