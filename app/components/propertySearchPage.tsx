/**
 * Author: Nora Bockert
 *
 * This file renders the search page by using the parameters set by Filter.tsx.
 * On submit, this page will recieve the response from the api call and
 * set the properties on the client side to render the search results and display
 * them to the user.
 *
 */

'use client';
import { useState } from 'react';
import FilterBar from './Filter';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress,Link } from "@mui/material";
import type {Property} from '@/app/types';



export default function PropertySearchPage() {
    //handle loading while waiting for api results and setting properties from api response
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (filters: {
        location: string;
        status_type: string;
        home_type?: string;
        maxPrice?: number;
        rentMaxPrice?: number;
    }) => {
        setLoading(true);

        const query = new URLSearchParams({
            location: filters.location,
            status_type: filters.status_type,
        });
        //display attributes based on status type
        if (filters.home_type) query.append("home_type", filters.home_type);
        if (filters.status_type === "ForRent" && filters.rentMaxPrice !== undefined)
            query.append("rentMaxPrice", filters.rentMaxPrice.toString());
        if (
            (filters.status_type === "ForSale" || filters.status_type === "RecentlySold") &&
            filters.maxPrice !== undefined
        )
            query.append("maxPrice", filters.maxPrice.toString());

        try {
            //await response from search/route.ts
            const res = await fetch(`/api/search?${query.toString()}`);
            const data = await res.json();

            if (data.props){
                data.props = data.props.filter((property: { zpid: string; }) =>{
                    return !property.zpid.includes("-");
                });
            }
            //set properties to display listing details
            setProperties(data.props || []);
        } catch (err) {
            console.error("Client error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
        <Box p={4}>
            <FilterBar onSearchAction={handleSearch} />
            {loading && (
                <Box
                    display="flex"
                    justifyContent="center"
                    alignItems="center"
                    height="200px" // optional: controls vertical space
                >
                    <CircularProgress />
                </Box>
            )}
            <Box mt={4} display="flex" flexWrap="wrap" gap={2} alignItems="center" justifyContent="center">
                {properties.map((property) => (
                    <Link href={`/${property.zpid}`} key={property.zpid}>
                        <Card key={property.zpid} sx={{ width: 300, backgroundColor: "#9EC6F3", color: "#205781"}}>
                            <CardMedia component="img" height="180" image={property.imgSrc} alt={property.address} />
                            <CardContent>
                                <Typography variant="h6">{property.address}</Typography>
                                <Typography variant="body2">
                                    {property.bedrooms} bd • {property.bathrooms} ba • {property.livingArea} sqft
                                </Typography>
                                <Typography variant="body1">${property.price}</Typography>
                                <Typography variant="caption">{property.propertyType}</Typography>
                            </CardContent>
                        </Card>
                    </Link>
                ))}
            </Box>
        </Box>
        </>
    );
}
