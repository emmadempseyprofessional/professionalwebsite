import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioComponent } from './visual-portfolio.component';

describe('VisualPortfolioComponent', () => {
    let component: VisualPortfolioComponent;
    let fixture: ComponentFixture<VisualPortfolioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(VisualPortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
