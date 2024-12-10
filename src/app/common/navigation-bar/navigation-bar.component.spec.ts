import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationBarComponent } from './navigation-bar.component';
import { RouterModule } from '@angular/router';
import { routes } from '@infrastructure/app.routes';

describe('NavigationBarComponent', () => {
    let component: NavigationBarComponent;
    let fixture: ComponentFixture<NavigationBarComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [NavigationBarComponent, RouterModule.forRoot(routes)]
        })
            .compileComponents();

        fixture = TestBed.createComponent(NavigationBarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
