/**
 * This file defines the object types used in the application
 * specifically to sort and access the data from the Zillow API.
 */


export type Property = {
    // A property object. It is used in the response from the PropertySearch page.
    propertyType: string;
    address: string;
    imgSrc: string;
    price: number;
    bedrooms: number;
    zpid: string;
    bathrooms: number;
    livingArea: number;
};

export type SingleProperty = {
    // A detailed version of property object that fits the response of retrieving a
    // single property from the Zillow API. It is used in the PropertyDetail page.
    zpid: string;
    imgSrc: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    livingArea: string;
    yearBuilt: number;
    homeStatus: string;
    description: string;
    address: {
        streetAddress: string;
        city: string;
        state: string;
        zipCode: string;
    };
};