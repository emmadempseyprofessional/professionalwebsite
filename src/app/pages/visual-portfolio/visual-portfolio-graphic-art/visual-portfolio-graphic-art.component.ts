import { Component } from '@angular/core';
import { PortfolioImgComponent } from '@common/components/portfolio-img/portfolio-img.component';
import { IVisualPortfolioDataService, VisualPortfolioCard, VisualPortfolioPageType } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

@Component({
    selector: 'app-visual-portfolio-graphic-art',
    imports: [PortfolioImgComponent],
    templateUrl: './visual-portfolio-graphic-art.component.html',
    styleUrl: './visual-portfolio-graphic-art.component.scss'
})
export class VisualPortfolioGraphicArtComponent {
    constructor(public visualPortfolioDataService: IVisualPortfolioDataService) {}

    getCard(id: string): VisualPortfolioCard | undefined {
        return this.visualPortfolioDataService.retrieveCard(VisualPortfolioPageType.GraphicArt, id);
    }
}
