/**
 * Author: Jonah Musher-Eizenman
 *
 * This file displays the larger detailed view of each property.
 * The details include the address, price, house type, number of
 * bedrooms, bathrooms, and the total square feet of the living area.
 */
"use client"
import {SingleProperty} from "@/app/types"
import {Box, Card, CardMedia, Link, Typography} from "@mui/material";
import React from "react";

export default function PropertyDetail({property}: {property: SingleProperty}) {
    //Component that renders the property's details written by Jonah Musher-Eizenman.
    return(
        <>
        {/* This link directs back to the home/property search page. */}
        <Link href='/'>
            <Typography variant="h4" sx={{color:'#205781',fontWeight: 300, textDecoration: "none", padding: "1rem"}}><strong>Home</strong></Typography>
        </Link>
        {/* This card holds and centers all the details for a single property*/}
        <Box p={4} display="flex" justifyContent="center" alignItems="center">
            <Card sx={{width:"70vw", backgroundColor: "#9EC6F3", color:"#205781", padding:"1rem", borderRadius:"15px"}} >

                <Typography justifySelf="center" variant="h3" fontWeight="600" padding="1rem">{property.address.streetAddress} {property.address?.city} {property.address?.state} {property.address?.zipCode}</Typography>

                {/*This card displays the properties image at a consistent size*/}
                <CardMedia
                    sx={{width:"50vw", height:"auto", margin: "0 auto", marginBottom:"1rem", borderRadius:"15px"}}
                    component="img"
                    image={property.imgSrc}
                    alt = {property.address.streetAddress}
                />

                {/*This card contains smaller cards that display one aspect of the property's information*/}
                <Card sx={{display:"flex", justifyContent:"space-evenly", padding:"2rem", margin: "1rem 0", backgroundColor: "#f4faff", borderRadius: "10px"}}>

                    {/*Property's Price*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>Current Price ${property.price.toLocaleString()}</Typography>
                    </Card>

                    {/*Number of Bedrooms*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>{property.bedrooms} Bedrooms</Typography>
                    </Card>

                    {/*Number of Bathrooms*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>{property.bathrooms} Bathrooms</Typography>
                    </Card>

                    {/*Square Ft. of living space*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>{property.livingArea} Square Ft. of living area</Typography>
                    </Card>

                    {/*The property's sale type (ie: For Rent, For Sale, etc.)*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>{property.homeStatus}</Typography>
                    </Card>

                    {/*Year the property was built*/}
                    <Card sx={{padding:"1%"}}>
                        <Typography>Constructed in {property.yearBuilt}</Typography>
                    </Card>
                </Card>

                {/*This is a separate card containing a description of the property*/}
                <Card sx={{padding:"2rem", backgroundColor: "#f4faff", borderRadius: "10px"}}>
                    <Typography>{property.description}</Typography>
                </Card>
            </Card>
        </Box>
        </>)
}