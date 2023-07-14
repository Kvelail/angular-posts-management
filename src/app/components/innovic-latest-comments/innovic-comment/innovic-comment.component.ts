import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-innovic-comment',
    templateUrl: './innovic-comment.component.html',
    styleUrls: ['./innovic-comment.component.scss'],
})
export class InnovicCommentComponent {
    @Input() commentEmail: string | null = null;
    @Input() commentText: string | null = null;
    @Input() postNumber: number | null = null;
}
