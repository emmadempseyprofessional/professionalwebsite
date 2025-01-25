import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioComponent } from './visual-portfolio.component';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';
import { RouterModule } from '@angular/router';
import { routes } from '@infrastructure/app.routes';

describe('VisualPortfolioComponent', () => {
    let component: VisualPortfolioComponent;
    let fixture: ComponentFixture<VisualPortfolioComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [VisualPortfolioComponent, RouterModule.forRoot(routes)],
            providers: [
                //Services
                { provide: IBackToTopService, useClass: BackToTopService }
            ]
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
