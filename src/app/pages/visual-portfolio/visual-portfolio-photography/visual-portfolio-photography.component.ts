import { Component } from '@angular/core';
import { PortfolioImgComponent } from '@common/components/portfolio-img/portfolio-img.component';
import { IVisualPortfolioDataService, VisualPortfolioCard, VisualPortfolioPageType } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

@Component({
    selector: 'app-visual-portfolio-photography',
    imports: [PortfolioImgComponent],
    templateUrl: './visual-portfolio-photography.component.html',
    styleUrl: './visual-portfolio-photography.component.scss'
})
export class VisualPortfolioPhotographyComponent {
    constructor(public visualPortfolioDataService: IVisualPortfolioDataService) {}

    getCard(id: string): VisualPortfolioCard | undefined {
        return this.visualPortfolioDataService.retrieveCard(VisualPortfolioPageType.Photography, id);
    }
}
