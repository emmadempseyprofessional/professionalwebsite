import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { BackToTopService } from '@common/services/back-to-top/back-to-top.service';
import { IBackToTopService } from '@common/services/back-to-top/back-to-top.service.interface';

import { routes } from '@infrastructure/app.routes';

export const appConfig: ApplicationConfig = {
    providers: [
        provideZoneChangeDetection({ eventCoalescing: true }), 
        provideRouter(routes, withHashLocation()),

        //Services
        { provide: IBackToTopService, useClass: BackToTopService }
    ]
};
