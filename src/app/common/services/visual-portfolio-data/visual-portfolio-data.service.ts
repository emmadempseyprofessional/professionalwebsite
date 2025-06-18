import { Injectable } from '@angular/core';
import { IVisualPortfolioDataService, VisualPortfolioCard, VisualPortfolioPageType } from './visual-portfolio-data.service.interface';

@Injectable({
    providedIn: 'root'
})
export class VisualPortfolioDataService implements IVisualPortfolioDataService {
    public retrieveCard(pageType: VisualPortfolioPageType, id: string): VisualPortfolioCard | undefined {
        return this.visualPortfolioCardList.find(card => 
            (card.pages & pageType) != 0
            &&
            card.id === id
        );
    }

    private visualPortfolioCardList: VisualPortfolioCard[] = [
        {
            id: "visual1",
            src: "images/visual1.jpg",
            alt: "Guitarist playing at a show",
            date: "March 2022",
            description: "Guitarist playing at a show",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual2",
            src: "images/visual2.jpg",
            alt: "Black and white photo of a goose with its head underwater",
            date: "",
            description: "Black and white photo of a goose with its head underwater",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual3",
            src: "images/visual3.jpg",
            alt: "Close up of funfetti cupcakes",
            date: "",
            description: "Close up of funfetti cupcakes",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual4",
            src: "images/visual4.jpg",
            alt: "Pointillism piece of a magnolia tree flower",
            date: "",
            description: "Pointillism piece of a magnolia tree flower",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.GraphicArt
        },
        {
            id: "visual5",
            src: "images/visual5.jpg",
            alt: "Photographed self portrait of Emma Dempsey, in costume",
            date: "",
            description: "Photographed self portrait of Emma Dempsey, in costume",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual6",
            src: "images/visual6.jpg",
            alt: "Singer for a band holding microphone to the crowd",
            date: "",
            description: "Singer for a band holding microphone to the crowd",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual7",
            src: "images/visual7.jpg",
            alt: "Abstract photo of a tree with moss",
            date: "",
            description: "Abstract photo of a tree with moss",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual8",
            src: "images/visual8.jpg",
            alt: "Lefthand and Righthand sides of a magazine featured on April Greiman",
            date: "",
            description: "Lefthand and Righthand sides of a magazine featured on April Greiman",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.GraphicArt
        },
        {
            id: "visual9",
            src: "images/visual9.jpg",
            alt: "Infographic on most popular flavors of Dum Dums lollipops",
            date: "",
            description: "Infographic on most popular flavors of Dum Dums lollipops",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.GraphicArt
        },
        {
            id: "visual10",
            src: "images/visual10.jpg",
            alt: "Portrait of a redheaded woman in the forest during autumn",
            date: "",
            description: "Portrait of a redheaded woman in the forest during autumn",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual11",
            src: "images/visual11.jpg",
            alt: "Lefthand and Righthand sides of a magazine featured on April Greiman",
            date: "",
            description: "Lefthand and Righthand sides of a magazine featured on April Greiman",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.GraphicArt
        },
        {
            id: "visual12",
            src: "images/visual12.jpg",
            alt: "Headshot style portrait of a woman against a tree",
            date: "",
            description: "Headshot style portrait of a woman against a tree",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual13",
            src: "images/visual13.jpg",
            alt: "Close up photo of a dandelion",
            date: "",
            description: "Close up photo of a dandelion",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual14",
            src: "images/visual14.jpg",
            alt: "Close up photo of pink macarons",
            date: "",
            description: "Close up photo of pink macarons",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual15",
            src: "images/visual15.jpg",
            alt: "Photo of a winding path in a park",
            date: "",
            description: "Photo of a winding path in a park",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        },
        {
            id: "visual16",
            src: "images/visual16.jpg",
            alt: "Abstract graphic design using similar colors and shapes",
            date: "",
            description: "Abstract graphic design using similar colors and shapes",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.GraphicArt
        },
        {
            id: "visual17",
            src: "images/visual17.jpg",
            alt: "Landscape of the beach, with a single subject walking the shore",
            date: "",
            description: "Landscape of the beach, with a single subject walking the shore",
            pages: VisualPortfolioPageType.All | VisualPortfolioPageType.Photography
        }
    ]
}
