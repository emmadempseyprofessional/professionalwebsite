import { EffectRef, ElementRef } from "@angular/core";
import { Subscription } from "rxjs";

export abstract class IBackToTopService {
    public abstract emitScrollEvent(scrollEvent: ScrollEvent): void
    public abstract registerScrollHandlerSubscription(elementType: ScrollableElement, element: Element): Subscription
}

export type ScrollEvent = {
    elementType: ScrollableElement;
    options: ScrollToOptions;
}

export enum ScrollableElement {
    Main // The <app-component>'s <main>
}
