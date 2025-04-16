//author: Nora Bockert

"use server"
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
    console.log(`api key:${process.env.RAPIDAPI_KEY}`);
    const { searchParams } = req.nextUrl;

    const location = searchParams.get("location");
    const statusType = searchParams.get("statusType");
    const homeType = searchParams.get("homeType");
    const maxPrice = searchParams.get("maxPrice");
    const rentMaxPrice = searchParams.get("rentMaxPrice");

    if (!location || !statusType) {
        return NextResponse.json({ error: "Missing required parameters" }, { status: 400 });
    }

    const baseUrl = "https://zillow-com1.p.rapidapi.com/propertyExtendedSearch"; // or correct Zillow endpoint
    const zillowParams = new URLSearchParams();
    zillowParams.append("location", location);
    zillowParams.append("statusType", statusType);
    if (homeType) zillowParams.append("homeType", homeType);
    if (statusType === "ForRent" && rentMaxPrice)
        zillowParams.append("rentMaxPrice", rentMaxPrice);
    if ((statusType === "ForSale" || statusType === "RecentlySold") && maxPrice)
        zillowParams.append("maxPrice", maxPrice);

    try {
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