import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioAllComponent } from './visual-portfolio-all.component';

describe('VisualPortfolioAllComponent', () => {
    let component: VisualPortfolioAllComponent;
    let fixture: ComponentFixture<VisualPortfolioAllComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioAllComponent]
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
