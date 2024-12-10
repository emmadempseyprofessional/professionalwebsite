import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from '@infrastructure/app.config';
import { AppComponent } from '@infrastructure/app.component';

bootstrapApplication(AppComponent, appConfig)
    .catch((err) => console.error(err));
