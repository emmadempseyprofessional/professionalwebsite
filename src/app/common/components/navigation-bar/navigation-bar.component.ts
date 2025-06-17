import { Component, signal, WritableSignal } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouterLinkRoutePath } from '@infrastructure/app.routes';

@Component({
    selector: 'app-navigation-bar',
    imports: [RouterModule],
    templateUrl: './navigation-bar.component.html',
    styleUrl: './navigation-bar.component.scss'
})
export class NavigationBarComponent {
    //Expose enums
    RouterLinkRoutePath = RouterLinkRoutePath;

    isExpanded: WritableSignal<boolean> = signal(true);

    toggleIsExpanded() {
        this.isExpanded.update(oldIsExpanded => !oldIsExpanded)
    }
}
