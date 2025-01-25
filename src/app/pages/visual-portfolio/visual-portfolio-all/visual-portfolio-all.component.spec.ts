import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioAllComponent } from './visual-portfolio-all.component';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';

describe('VisualPortfolioAllComponent', () => {
    let component: VisualPortfolioAllComponent;
    let fixture: ComponentFixture<VisualPortfolioAllComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioAllComponent],
            providers: [
                //Services
                { provide: IBackToTopService, useClass: BackToTopService }
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
