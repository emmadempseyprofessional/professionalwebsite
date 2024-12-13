import { TestBed } from '@angular/core/testing';
import { RouterModule } from '@angular/router';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';
import { AppComponent } from '@infrastructure/app.component';
import { routes } from '@infrastructure/app.routes';

describe('AppComponent', () => {
    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [AppComponent, RouterModule.forRoot(routes)],
            providers: [
                //Services
                { provide: IBackToTopService, useClass: BackToTopService }
            ]
        }).compileComponents();
    });

    it('should create the app', () => {
        const fixture = TestBed.createComponent(AppComponent);
        const app = fixture.componentInstance;
        expect(app).toBeTruthy();
    });
});
