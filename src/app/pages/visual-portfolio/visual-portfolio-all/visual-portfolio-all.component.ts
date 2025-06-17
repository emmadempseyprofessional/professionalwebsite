import { Component } from '@angular/core';
import { PortfolioImgComponent } from '@common/components/portfolio-img/portfolio-img.component';
import { IVisualPortfolioDataService, VisualPortfolioCard, VisualPortfolioPageType } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

@Component({
    selector: 'app-visual-portfolio-all',
    imports: [PortfolioImgComponent],
    templateUrl: './visual-portfolio-all.component.html',
    styleUrl: './visual-portfolio-all.component.scss'
})
export class VisualPortfolioAllComponent {
    constructor(public visualPortfolioDataService: IVisualPortfolioDataService) {}

    getCard(id: string): VisualPortfolioCard | undefined {
        return this.visualPortfolioDataService.retrieveCard(VisualPortfolioPageType.All, id);
    }
}
