import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioGraphicArtComponent } from './visual-portfolio-graphic-art.component';
import { IVisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';
import { VisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service';

describe('VisualPortfolioGraphicArtComponent', () => {
    let component: VisualPortfolioGraphicArtComponent;
    let fixture: ComponentFixture<VisualPortfolioGraphicArtComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioGraphicArtComponent],
            providers: [
                //Services
                { provide: IVisualPortfolioDataService, useClass: VisualPortfolioDataService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(VisualPortfolioGraphicArtComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
