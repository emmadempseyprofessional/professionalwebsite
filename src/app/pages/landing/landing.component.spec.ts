import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { routes } from '@infrastructure/app.routes';
import { IScrollService } from '@common/services/back-to-top/scroll.service.interface';
import { ScrollService } from '@common/services/back-to-top/scroll.service';

describe('LandingComponent', () => {
    let component: LandingComponent;
    let fixture: ComponentFixture<LandingComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [LandingComponent, RouterModule.forRoot(routes)],
            providers: [
                //Services
                { provide: IScrollService, useClass: ScrollService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(LandingComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
