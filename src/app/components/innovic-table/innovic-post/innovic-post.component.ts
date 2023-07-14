import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'app-innovic-post',
    templateUrl: './innovic-post.component.html',
    styleUrls: ['./innovic-post.component.scss'],
})
export class InnovicPostComponent {
    @Input() postOrdinal: number = 0;
    @Input() postTitle: string | null = null;
    @Input() postDescription: string | null = null;

    @Output() isReviewingPostEmitter = new EventEmitter<number>();

    public handlePostClick(postOrdinal: number): void {
        this.isReviewingPostEmitter.emit(postOrdinal);
    }
}
