import { Component } from '@angular/core';
import { BackToTopComponent } from "../../common/components/back-to-top/back-to-top.component";
import { RouterModule } from '@angular/router';
import { RouterLinkRoutePath } from '@infrastructure/app.routes';

@Component({
    selector: 'app-landing',
    imports: [BackToTopComponent, RouterModule],
    templateUrl: './landing.component.html',
    styleUrl: './landing.component.scss'
})
export class LandingComponent {
    //Expose enums
    RouterLinkRoutePath = RouterLinkRoutePath;
}
