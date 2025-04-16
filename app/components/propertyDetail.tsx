//author: Jonah Musher-Eizenman
"use client"
import {SingleProperty} from "@/app/types"
import {Box, Card, CardMedia, Typography} from "@mui/material";

export default function PropertyDetail({property}: {property: SingleProperty}) {
    return(
        <Box>
            <Card>
                <CardMedia
                    component="img"
                    image={property.imgSrc}
                    alt = {property.address.streetAddress}
                />
                <Card>
                    <Typography>{property.address.streetAddress} {property.address.city} {property.address.state} {property.address.zipCode}</Typography>
                    <Typography>Current Price ${property.price.toLocaleString()}</Typography>
                    <Typography>{property.bedrooms} bedrooms</Typography>
                    <Typography>{property.bathrooms} bathrooms</Typography>
                    <Typography>{property.livingArea} square ft of living area</Typography>
                    <Typography>Property Type: {property.homeType} • {property.homeStatus}</Typography>
                    <Typography>Constructed in {property.yearBuilt}</Typography>
                </Card>
                <Card>
                    <Typography>{property.description}</Typography>
                </Card>
            </Card>
        </Box>)
}