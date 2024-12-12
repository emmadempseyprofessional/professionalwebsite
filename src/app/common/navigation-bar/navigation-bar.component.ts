import { NgClass } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RoutePath } from '@infrastructure/app.routes';

@Component({
    selector: 'app-navigation-bar',
    imports: [RouterModule, NgClass],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
    //Expose enums
    RoutePath = RoutePath;

    isExpanded: WritableSignal<boolean> = signal(true);

    toggleIsExpanded() {
        this.isExpanded.update(oldIsExpanded => !oldIsExpanded)
    }
}
