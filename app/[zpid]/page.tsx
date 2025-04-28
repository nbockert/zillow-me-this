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

export default async function PropertyDetailPage({params}:{params: {zpid: string}}){
        const property = await getProperty(params.zpid);
        return <PropertyDetail property={property}/>;
}