
export abstract class IVisualPortfolioDataService {
    public abstract retrieveCard(pageType: VisualPortfolioPageType, id: string): VisualPortfolioCard | undefined
}

/**
 * Binary enum for the visual portfolio sub-page types
 */
export enum VisualPortfolioPageType {
    UNKNOWN = 0,
    All = 1 << 0,
    GraphicArt = 1 << 1,
    Photography = 1 << 2
}

export interface VisualPortfolioCard {
    /**
     * unique identifier of the card
     */
    id: string;

    /**
     * image source
     */
    src: string;

    /**
     * Alternative text for the image
     */
    alt: string;

    /**
     * Date, to show when the image is clicked on
     */
    date: string;

    /**
     * Description, to show when the image is clicked on
     */
    description: string;

    /**
     * List of pages that this image should be included on
     */
    pages: VisualPortfolioPageType
}
