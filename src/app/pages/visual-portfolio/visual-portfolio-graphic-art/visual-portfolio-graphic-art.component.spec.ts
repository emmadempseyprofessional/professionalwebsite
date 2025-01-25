import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VisualPortfolioGraphicArtComponent } from './visual-portfolio-graphic-art.component';

describe('VisualPortfolioGraphicArtComponent', () => {
    let component: VisualPortfolioGraphicArtComponent;
    let fixture: ComponentFixture<VisualPortfolioGraphicArtComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioGraphicArtComponent]
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
