
/**
 * Author: Nora Bockert
 *
 * This file is used to collect the parameters entered by the user and
 * construct the api url and make the call. The function returns the response from the api call to
 * propertySearchPage
 *
 */
"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    //collect the search parameters from the request url
    const { searchParams } = req.nextUrl;
    const location = searchParams.get("location");
    const status_type = searchParams.get("status_type");
    const home_type = searchParams.get("home_type");
    const maxPrice = searchParams.get("maxPrice");
    const rentMaxPrice = searchParams.get("rentMaxPrice");

    //error handleing if the user does not provide necessary information
    if (!location || !status_type) {
        return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    //build the api from the search results
    const baseUrl = "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch";
    const zillowParams = new URLSearchParams();
    zillowParams.append("location", location);
    zillowParams.append("status_type", status_type);
    if (home_type) zillowParams.append("home_type", home_type);
    if (status_type === "ForRent" && rentMaxPrice)
        zillowParams.append("rentMaxPrice", rentMaxPrice);
    if ((status_type === "ForSale" || status_type === "RecentlySold") && maxPrice)
        zillowParams.append("maxPrice", maxPrice);
    //Call the api
    try {
        console.log(`${baseUrl}?${zillowParams.toString()}`)
        const res = await fetch(`${baseUrl}?${zillowParams.toString()}`, {
            method: "GET",
            headers: {
                "x-rapidapi-key": process.env.RAPIDAPI_KEY as string,
                "x-rapidapi-host": process.env.RAPIDAPI_HOST as string,
            },
        });

        const data = await res.json();
        return NextResponse.json(data);
    } catch (error) {
        console.error("Server error:", error);
        return NextResponse.json({ error: "Failed to fetch properties" }, { status: 500 });
    }
}