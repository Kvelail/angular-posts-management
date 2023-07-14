import { Component, Input } from '@angular/core';

@Component({
    selector: 'app-innovic-logo',
    templateUrl: './innovic-logo.component.html',
    styleUrls: ['./innovic-logo.component.scss'],
})
export class InnovicLogoComponent {
    @Input() colorGrey?: boolean = false;
    @Input() logoDimensionsInPixels?: number = 60;
}
