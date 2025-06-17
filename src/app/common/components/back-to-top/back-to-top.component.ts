import { Component } from '@angular/core';
import { IBackToTopService, ScrollableElement } from '@common/services/back-to-top/back-to-top.service.interface';

@Component({
    selector: 'app-back-to-top',
    imports: [],
    templateUrl: './back-to-top.component.html',
    styleUrl: './back-to-top.component.scss'
})
export class BackToTopComponent {
    constructor(private readonly backToTopService: IBackToTopService) {}

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
