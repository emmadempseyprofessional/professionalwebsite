import { Routes } from '@angular/router';
import { ContactComponent } from '@pages/contact/contact.component';
import { LandingComponent } from '@pages/landing/landing.component';
import { ResumeComponent } from '@pages/resume/resume.component';
import { VisualPortfolioComponent } from '@pages/visual-portfolio/visual-portfolio.component';
import { WritingPortfolioComponent } from '@pages/writing-portfolio/writing-portfolio.component';

enum RoutePath {
    Contact = 'contact',
    Landing = 'landing',
    Resume = 'resume',
    VisualPortfolio = 'visual-portfolio',
    WritingPortfolio = 'writing-porfolio'
}

export enum RouterLinkRoutePath {
    Contact = `/${RoutePath.Contact}`,
    Landing = `/${RoutePath.Landing}`,
    Resume = `/${RoutePath.Resume}`,
    VisualPortfolio = `/${RoutePath.VisualPortfolio}`,
    WritingPortfolio = `/${RoutePath.WritingPortfolio}`
}

export const routes: Routes = [
    { path: RoutePath.Contact, component: ContactComponent },
    { path: RoutePath.Landing, component: LandingComponent },
    { path: RoutePath.Resume, component: ResumeComponent },
    { path: RoutePath.VisualPortfolio, component: VisualPortfolioComponent },
    { path: RoutePath.WritingPortfolio, component: WritingPortfolioComponent },

    //Any unknown route redirects to the Landing Page
    { path: '**', redirectTo: RoutePath.Landing },
];
