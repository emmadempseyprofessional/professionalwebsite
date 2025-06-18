import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualPortfolioComponent } from './visual-portfolio.component';
import { IScrollService } from '@common/services/back-to-top/scroll.service.interface';
import { ScrollService } from '@common/services/back-to-top/scroll.service';
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
                { provide: IScrollService, useClass: ScrollService }
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
