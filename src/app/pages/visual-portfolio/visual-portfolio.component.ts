import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BackToTopComponent } from '@common/back-to-top/back-to-top.component';
import { RouterLinkRoutePath } from '@infrastructure/app.routes';

@Component({
    selector: 'app-visual-portfolio',
    imports: [BackToTopComponent, RouterModule, NgClass],
    templateUrl: './visual-portfolio.component.html',
    styleUrl: './visual-portfolio.component.scss'
})
export class VisualPortfolioComponent {
    //Expose enums
    RouterLinkRoutePath = RouterLinkRoutePath;
}
