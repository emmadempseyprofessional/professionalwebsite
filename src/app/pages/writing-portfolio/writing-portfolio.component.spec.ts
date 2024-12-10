import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WritingPortfolioComponent } from './writing-portfolio.component';

describe('WritingPortfolioComponent', () => {
    let component: WritingPortfolioComponent;
    let fixture: ComponentFixture<WritingPortfolioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [WritingPortfolioComponent]
        })
            .compileComponents();

        fixture = TestBed.createComponent(WritingPortfolioComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
