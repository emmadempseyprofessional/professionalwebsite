import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { ScrollService } from '@common/services/back-to-top/scroll.service';
import { IScrollService } from '@common/services/back-to-top/scroll.service.interface';
import { VisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service';
import { IVisualPortfolioDataService } from '@common/services/visual-portfolio-data/visual-portfolio-data.service.interface';

import { routes } from '@infrastructure/app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes, withHashLocation()),

        //Services
        { provide: IScrollService, useClass: ScrollService },
        { provide: IVisualPortfolioDataService, useClass: VisualPortfolioDataService }
    ]
};
