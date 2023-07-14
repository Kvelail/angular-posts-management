import { Component, EventEmitter, Input, Output } from '@angular/core';

import { PaginationModel } from 'src/app/state/model/pagination.model';

@Component({
    selector: 'app-innovic-pagination',
    templateUrl: './innovic-pagination.component.html',
    styleUrls: ['./innovic-pagination.component.scss'],
})
export class InnovicPaginationComponent {
    @Input() numberOfPaginationArray: PaginationModel[] | null = null;
    @Input() activeNumber: number = 1;

    @Output() paginationNumberEmitter = new EventEmitter<number>();

    public trackByIdentity = (index: number, _: any): number => index;

    public handlePaginationNumberClick(paginationNumberClicked: number): void {
        this.paginationNumberEmitter.emit(paginationNumberClicked);
    }
}
