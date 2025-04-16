//author: Nora Bockert
'use client';
import { useState } from 'react';
import FilterBar from './Filter';
import { Box, Typography, Card, CardContent, CardMedia, CircularProgress,Link } from "@mui/material";
import type {Property} from '@/app/types';


export default function PropertySearchPage() {
    const [properties, setProperties] = useState<Property[]>([]);
    const [loading, setLoading] = useState(false);

    const handleSearch = async (filters: {
        location: string;
        statusType: string;
        homeType?: string;
        maxPrice?: number;
        rentMaxPrice?: number;
    }) => {
        setLoading(true);

        const query = new URLSearchParams({
            location: filters.location,
            statusType: filters.statusType,
        });

        if (filters.homeType) query.append("homeType", filters.homeType);
        if (filters.statusType === "ForRent" && filters.rentMaxPrice !== undefined)
            query.append("rentMaxPrice", filters.rentMaxPrice.toString());
        if (
            (filters.statusType === "ForSale" || filters.statusType === "RecentlySold") &&
            filters.maxPrice !== undefined
        )
            query.append("maxPrice", filters.maxPrice.toString());

        try {
            const res = await fetch(`/api/search?${query.toString()}`);
            const data = await res.json();
            console.log("Zillow API response:", data);
            setProperties(data.props || []);
        } catch (err) {
            console.error("Client error:", err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Link href='/'>
                <Typography variant="h4" sx={{textAlign: 'left', mb: 4, fontSize: '1.25rem',color:'#508D4E',m:2,fontWeight: 300}}>Home</Typography>
            </Link>
        <Box p={4}>
            <FilterBar onSearchAction={handleSearch} />
            {loading && <CircularProgress />}
            <Box mt={4} display="flex" flexWrap="wrap" gap={2}>
                {properties.map((property) => (
                    <Link href={`/${property.zpid}`} key={property.zpid}>
                        <Card key={property.zpid} sx={{ width: 300 }}>
                            <CardMedia component="img" height="180" image={property.imgSrc} alt={property.address} />
                            <CardContent>
                                <Typography variant="h6">{property.address}</Typography>
                                <Typography variant="body2">
                                    {property.bedrooms} bd • {property.bathrooms} ba • {property.livingArea} sqft
                                </Typography>
                                <Typography variant="body1">${property.price.toLocaleString()}</Typography>
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
