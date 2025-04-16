//author: Jonah Musher-Eizenman

import PropertyDetail from "@/app/components/propertyDetail";
import getProperty from "@/app/lib/getProperty";

export default async function PropertyDetailPage({params}:{params: {zpid: string}}){
        const property = await getProperty(params.zpid);
        return <PropertyDetail property={property}/>;
}