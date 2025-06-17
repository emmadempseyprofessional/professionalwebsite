import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioPhotographyComponent } from './visual-portfolio-photography.component';
import { VisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service';
import { IVisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

describe('VisualPortfolioPhotographyComponent', () => {
    let component: VisualPortfolioPhotographyComponent;
    let fixture: ComponentFixture<VisualPortfolioPhotographyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioPhotographyComponent],
            providers: [
                //Services
                { provide: IVisualPortfolioDataService, useClass: VisualPortfolioDataService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(VisualPortfolioPhotographyComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
