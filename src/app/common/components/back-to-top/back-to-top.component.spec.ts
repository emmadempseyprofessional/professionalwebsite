import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackToTopComponent } from './back-to-top.component';
import { IScrollService } from '@common/services/back-to-top/scroll.service.interface';
import { ScrollService } from '@common/services/back-to-top/scroll.service';

describe('BackToTopComponent', () => {
    let component: BackToTopComponent;
    let fixture: ComponentFixture<BackToTopComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [BackToTopComponent],
            providers: [
                //Services
                { provide: IScrollService, useClass: ScrollService }
            ]
        })
            .compileComponents();

        fixture = TestBed.createComponent(BackToTopComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
