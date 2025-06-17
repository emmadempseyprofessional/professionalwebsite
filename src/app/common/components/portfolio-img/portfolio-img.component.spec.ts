import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PortfolioImgComponent } from './portfolio-img.component';

describe('PortfolioImgComponent', () => {
  let component: PortfolioImgComponent;
  let fixture: ComponentFixture<PortfolioImgComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PortfolioImgComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PortfolioImgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
