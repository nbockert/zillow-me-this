/**
 * Author: Jonah Musher-Eizenman
 *
 * This file utilizes the propertyDetail component to
 * display a single property's details. It uses dynamic
 * routing to retrieve property data depending on the zpid
 * value.
 *
 */
import PropertyDetail from "@/app/components/propertyDetail";
import getProperty from "@/app/lib/getProperty";

// Function that retrieves the property data based on zpids written by Jonah Musher-Eizenman
export default async function PropertyDetailPage({params}:{params: {zpid: string}}){

        //Retrieves data via the getProperty function with a property's zpid as the input.
        const property = await getProperty(params.zpid);

        // Returns the property's data as parameters for the PropertyDetail component.
        return <PropertyDetail property={property}/>;
}