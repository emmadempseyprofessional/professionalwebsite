import { Injectable } from '@angular/core';
import { IScrollService, ScrollableElement, ScrollEvent } from './scroll.service.interface';
import { filter, Subject, Subscription } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class ScrollService implements IScrollService {
    private scrollMessage: Subject<ScrollEvent>;

    constructor() {
        this.scrollMessage = new Subject<ScrollEvent>();
    }

    public emitScrollEvent(scrollEvent: ScrollEvent): void {
        this.scrollMessage.next(scrollEvent);
    }
    public registerScrollHandlerSubscription(elementType: ScrollableElement, element: Element): Subscription {
        return this.scrollMessage.asObservable().pipe(
            /* Filter to the desired elementType */
            filter((scrollEvent: ScrollEvent) => scrollEvent.elementType === elementType)
        ).subscribe((scrollEvent: ScrollEvent) => {
            /* Perform scroll on provided element */
            element.scrollTo(scrollEvent.options);
        });
    }
}
