/**
 * Author: Jonah Musher-Eizenman
 *
 * This file retrieves  and returns a specific property's
 * data from the Zillow API.
 */


export default async function getProperty(zpid: string){

    // Fetch data from the API with the private API Key and Host
    const res = await fetch(`https://zillow-com1.p.rapidapi.com/property?zpid=${zpid}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": process.env.RAPIDAPI_KEY as string,
            "x-rapidapi-host": process.env.RAPIDAPI_HOST as string,
        },
    });

    // Returns the data
    return (await res.json());
}