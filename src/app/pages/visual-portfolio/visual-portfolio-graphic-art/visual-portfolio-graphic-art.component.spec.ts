import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioGraphicArtComponent } from './visual-portfolio-graphic-art.component';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';

describe('VisualPortfolioGraphicArtComponent', () => {
    let component: VisualPortfolioGraphicArtComponent;
    let fixture: ComponentFixture<VisualPortfolioGraphicArtComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioGraphicArtComponent],
            providers: [
                //Services
                { provide: IBackToTopService, useClass: BackToTopService }
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
