import { AfterViewInit, Component, ElementRef, OnDestroy, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from "../common/components/navigation-bar/navigation-bar.component";
import { IBackToTopService, ScrollableElement } from '@common/services/back-to-top/back-to-top.service.interface';
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

    constructor(private readonly backToTopService: IBackToTopService) {}

    ngAfterViewInit(): void {
        this.scrollSubscription = this.backToTopService.registerScrollHandlerSubscription(ScrollableElement.Main, this.mainElement.nativeElement);
    }

    ngOnDestroy(): void {
        this.scrollSubscription?.unsubscribe();
    }
}
