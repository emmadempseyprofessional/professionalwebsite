import { TestBed } from '@angular/core/testing';

import { VisualPortfolioDataService } from './visual-portfolio-data.service';

describe('VisualPortfolioDataService', () => {
  let service: VisualPortfolioDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisualPortfolioDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
