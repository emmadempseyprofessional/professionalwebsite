import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioPhotographyComponent } from './visual-portfolio-photography.component';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';

describe('VisualPortfolioPhotographyComponent', () => {
    let component: VisualPortfolioPhotographyComponent;
    let fixture: ComponentFixture<VisualPortfolioPhotographyComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioPhotographyComponent],
            providers: [
                //Services
                { provide: IBackToTopService, useClass: BackToTopService }
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
