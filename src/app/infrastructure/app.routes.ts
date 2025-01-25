import { Routes } from '@angular/router';
import { ContactComponent } from '@pages/contact/contact.component';
import { LandingComponent } from '@pages/landing/landing.component';
import { ResumeComponent } from '@pages/resume/resume.component';
import { VisualPortfolioAllComponent } from '@pages/visual-portfolio/visual-portfolio-all/visual-portfolio-all.component';
import { VisualPortfolioGraphicArtComponent } from '@pages/visual-portfolio/visual-portfolio-graphic-art/visual-portfolio-graphic-art.component';
import { VisualPortfolioPhotographyComponent } from '@pages/visual-portfolio/visual-portfolio-photography/visual-portfolio-photography.component';
import { VisualPortfolioComponent } from '@pages/visual-portfolio/visual-portfolio.component';
import { WritingPortfolioComponent } from '@pages/writing-portfolio/writing-portfolio.component';

enum RoutePath {
    Contact = 'contact',
    Landing = 'landing',
    Resume = 'resume',
    VisualPortfolio = 'visual-portfolio',
    VisualPortfolioAll = 'all',
    VisualPortfolioGraphicArt = 'graphic-art-and-design',
    VisualPortfolioPhotography = 'photography',
    WritingPortfolio = 'writing-porfolio'
}

export enum RouterLinkRoutePath {
    Contact = `/${RoutePath.Contact}`,
    Landing = `/${RoutePath.Landing}`,
    Resume = `/${RoutePath.Resume}`,
    VisualPortfolio = `/${RoutePath.VisualPortfolio}`,
    VisualPortfolioAll = `/${RoutePath.VisualPortfolio}/${RoutePath.VisualPortfolioAll}`,
    VisualPortfolioGraphicArt = `/${RoutePath.VisualPortfolio}/${RoutePath.VisualPortfolioGraphicArt}`,
    VisualPortfolioPhotography = `/${RoutePath.VisualPortfolio}/${RoutePath.VisualPortfolioPhotography}`,
    WritingPortfolio = `/${RoutePath.WritingPortfolio}`
}

export const routes: Routes = [
    { path: RoutePath.Contact, component: ContactComponent },
    { path: RoutePath.Landing, component: LandingComponent },
    { path: RoutePath.Resume, component: ResumeComponent },
    {
        path: RoutePath.VisualPortfolio, component: VisualPortfolioComponent,
        children: [
            { path: RoutePath.VisualPortfolioAll, component: VisualPortfolioAllComponent },
            { path: RoutePath.VisualPortfolioGraphicArt, component: VisualPortfolioGraphicArtComponent },
            { path: RoutePath.VisualPortfolioPhotography, component: VisualPortfolioPhotographyComponent },
            { path: '**', redirectTo: RoutePath.VisualPortfolioAll },
        ],
    },
    { path: RoutePath.WritingPortfolio, component: WritingPortfolioComponent },

    //Any unknown route redirects to the Landing Page
    { path: '**', redirectTo: RoutePath.Landing },
];
