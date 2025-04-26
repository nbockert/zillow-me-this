//author: Jonah Musher-Eizenman

import PropertyDetail from "@/app/components/propertyDetail";
import getProperty from "@/app/lib/getProperty";

export const dynamic = "force-dynamic"

export default async function PropertyDetailPage({params}:{params: {zpid: string}}){
        const property = await getProperty(params.zpid);
        console.log("Zillow raw data:", await property);
        return <PropertyDetail property={property}/>;
}