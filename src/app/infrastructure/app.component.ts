import { AfterViewInit, Component, ElementRef, HostListener, OnDestroy, Renderer2, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "../common/components/navigation-bar/navigation-bar.component";
import { IScrollService, ScrollableElement } from '@common/services/back-to-top/scroll.service.interface';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet, NavigationBarComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit, OnDestroy {
    @ViewChild('mainElement', { static: true }) mainElement!: ElementRef<HTMLElement>;
    private scrollSubscription?: Subscription;

    constructor(private readonly backToTopService: IScrollService, private readonly renderer: Renderer2) {}

    ngAfterViewInit(): void {
        this.scrollSubscription = this.backToTopService.registerScrollHandlerSubscription(ScrollableElement.Main, this.mainElement.nativeElement);
    }

    ngOnDestroy(): void {
        this.scrollSubscription?.unsubscribe();
    }

    onScroll(event: any) {
        const scrolledToBottomPercentage = (event.target.scrollTop) / (event.target.scrollHeight - event.target.offsetHeight);
        this.renderer.setAttribute(this.mainElement.nativeElement, 'style', `--emma-scroll: ${scrolledToBottomPercentage}`);
    }
}
