//author: Jonah Musher-Eizenman
"use client"
import {SingleProperty} from "@/app/types"
import {Box, Card, CardMedia, Link, Typography} from "@mui/material";
import React from "react";

export default function PropertyDetail({property}: {property: SingleProperty}) {
    return(
        <>
        <Link href='/'>
            <Typography variant="h4" sx={{color:'#205781',fontWeight: 300, textDecoration: "none", padding: "1rem"}}><strong>Home</strong></Typography>
        </Link>
        <Box p={4} display="flex" justifyContent="center" alignItems="center">
            <Card sx={{width:"70vw", backgroundColor: "#9EC6F3", color:"#205781", padding:"1rem", borderRadius:"15px"}} >
                <Typography justifySelf="center" variant="h3" fontWeight="600" padding="1rem">{property.address.streetAddress} {property.address?.city} {property.address?.state} {property.address?.zipCode}</Typography>
                <CardMedia
                    sx={{width:"50vw", height:"auto", margin: "0 auto", marginBottom:"1rem", borderRadius:"15px"}}
                    component="img"
                    image={property.imgSrc}
                    alt = {property.address.streetAddress}
                />
                <Card sx={{display:"flex", justifyContent:"space-evenly", padding:"2rem", margin: "1rem 0", backgroundColor: "#f4faff", borderRadius: "10px"}}>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>Current Price ${property.price.toLocaleString()}</Typography>
                    </Card>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>{property.bedrooms} Bedrooms</Typography>
                    </Card>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>{property.bathrooms} Bathrooms</Typography>
                    </Card>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>{property.livingArea} Square Ft. of living area</Typography>
                    </Card>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>{property.homeStatus}</Typography>
                    </Card>
                    <Card sx={{padding:"1rem"}}>
                        <Typography>Constructed in {property.yearBuilt}</Typography>
                    </Card>
                </Card>
                <Card sx={{padding:"2rem", backgroundColor: "#f4faff", borderRadius: "10px"}}>
                    <Typography>{property.description}</Typography>
                </Card>
            </Card>
        </Box>
        </>)
}