export type PropertyApiResponse = {
    props: Property[];
    resultsPerPage: number;
    totalPages: number;
    totalResultCount: number;
    currentPage: number;
};

export type Property = {
    dateSold: string | null;
    propertyType: string;
    lotAreaValue: number;
    address: string;
    imgSrc: string;
    price: number;
    bedrooms: number;
    longitude: number;
    latitude: number;
    listingStatus: string;
    zpid: string;
    listingSubType: {
        is_FSBA: boolean;
    };
    contingentListingType: string | null;
    daysOnZillow: number;
    bathrooms: number;
    livingArea: number;
    country: string;
    currency: string;
    lotAreaUnit: string;
    hasImage: boolean;
};
