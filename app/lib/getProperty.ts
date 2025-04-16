export default async function getProperty(zpid: string){

    const res = await fetch(`https://zillow-com1.p.rapidapi.com/property?zpid=${zpid}`, {
        method: "GET",
        headers: {
            "x-rapidapi-key": process.env.RAPIDAPI_KEY as string,
            "x-rapidapi-host": process.env.RAPIDAPI_HOST as string,
        },
    });
    return (await res.json());
}