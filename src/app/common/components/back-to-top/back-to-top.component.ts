import { Component } from '@angular/core';
import { IScrollService, ScrollableElement } from '@common/services/back-to-top/scroll.service.interface';

@Component({
    selector: 'app-back-to-top',
    imports: [],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
    constructor(private readonly backToTopService: IScrollService) {}

    onScrollToTop() {
        this.backToTopService.emitScrollEvent({
            elementType: ScrollableElement.Main,
            options: {
                top: 0,
                behavior: "smooth"
            }
        })
        return false;
    }
}
