import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioAllComponent } from './visual-portfolio-all.component';
import { IVisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';
import { VisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service';

describe('VisualPortfolioAllComponent', () => {
    let component: VisualPortfolioAllComponent;
    let fixture: ComponentFixture<VisualPortfolioAllComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioAllComponent],
            providers: [
                //Services
                { provide: IVisualPortfolioDataService, useClass: VisualPortfolioDataService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(VisualPortfolioAllComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
