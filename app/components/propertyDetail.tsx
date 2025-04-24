//author: Jonah Musher-Eizenman
"use client"
import {SingleProperty} from "@/app/types"
import {Box, Card, CardMedia, Typography} from "@mui/material";

export default function PropertyDetail({property}: {property: SingleProperty}) {
    return(
        <Box p={4} display="flex" justifyContent="center" alignItems="center">
            <Card sx={{width:"70vw", backgroundColor: "#9EC6F3", color:"#205781", padding:"1rem", borderRadius:"15px"}} >
                <CardMedia
                    sx={{width:"50vw", height:"auto", margin: "0 auto", marginBottom:"1rem", borderRadius:"15px"}}
                    component="img"
                    image={property.imgSrc}
                    alt = {property.address.streetAddress}
                />
                <Card sx={{padding:"2rem", backgroundColor: "#f4faff", borderRadius: "10px"}}>
                    <Typography>{property.address.streetAddress} {property.address?.city} {property.address?.state} {property.address?.zipCode}</Typography>
                    <Typography>Current Price ${property.price.toLocaleString()}</Typography>
                    <Typography>{property.bedrooms} bedrooms</Typography>
                    <Typography>{property.bathrooms} bathrooms</Typography>
                    <Typography>{property.livingArea} square ft of living area</Typography>
                    <Typography>Property Type: {property.home_type} • {property.homeStatus}</Typography>
                    <Typography>Constructed in {property.yearBuilt}</Typography>
                </Card>
                <Card sx={{padding:"2rem", backgroundColor: "#f4faff", borderRadius: "10px"}}>
                    <Typography>{property.description}</Typography>
                </Card>
            </Card>
        </Box>)
}