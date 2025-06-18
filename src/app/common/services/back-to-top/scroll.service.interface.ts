import { Subscription } from "rxjs";

export abstract class IScrollService {
    public abstract emitScrollEvent(scrollEvent: ScrollEvent): void
    public abstract registerScrollHandlerSubscription(elementType: ScrollableElement, element: Element): Subscription
}

export interface ScrollEvent {
    elementType: ScrollableElement;
    options: ScrollToOptions;
}

export enum ScrollableElement {
    Main // The <app-component>'s <main>
}
