import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioPhotographyComponent } from './visual-portfolio-photography.component';

describe('VisualPortfolioPhotographyComponent', () => {
    let component: VisualPortfolioPhotographyComponent;
    let fixture: ComponentFixture<VisualPortfolioPhotographyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioPhotographyComponent]
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
