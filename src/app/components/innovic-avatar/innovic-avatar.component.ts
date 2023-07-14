import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-innovic-avatar',
    templateUrl: './innovic-avatar.component.html',
    styleUrls: ['./innovic-avatar.component.scss'],
})
export class InnovicAvatarComponent {
    @Input() avatarDimensionsInPixels?: number = 30;
}
