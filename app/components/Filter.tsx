
/**
 * Author: Nora Bockert
 *
 * This file defines the filter search bar to collect users criteria for listings
 *
 */
"use client";

import { useState, useEffect } from "react";
import {
    Box,
    TextField,
    Select,
    MenuItem,
    Button,
    InputLabel,
    FormControl,
} from "@mui/material";
import styled from "styled-components";

//required parameter to set home types and rent value
const status_type = ["ForSale", "ForRent", "RecentlySold"];

// Define props expected by FilterBar component
type FilterBarProps = {
    onSearchAction: (filters: {
        location: string;
        status_type: string;
        home_type?: string;
        maxPrice?: number;
        rentMaxPrice?: number;
    }) => void;
};

// Style component for the filter
const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    max-width: 100%;
   
    
`;

export default function FilterBar({ onSearchAction }: FilterBarProps) {
    // State hooks for each filter field
    const [status, setStatus] = useState<string>("");
    const [home_types, setHomeTypes] = useState<string[]>([]);
    const [location, setLocation] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<number | undefined>();
    const [rentMaxPrice, setRentMaxPrice] = useState<number | undefined>();
    const [selectedHomeType, setSelectedHomeType] = useState<string>("");

    // Update available home types and reset price fields when status changes
    useEffect(() => {
        if (status === "ForRent") {
            setHomeTypes(["Townhomes", "Houses", "Apartments Condos Co-ops"]);
        } else {
            setHomeTypes([
                "Multi-family",
                "Apartments",
                "Houses",
                "Manufactured",
                "Condos",
                "Lots of Land",
                "Townhomes",
            ]);
        }
        setMaxPrice(undefined);
        setRentMaxPrice(undefined);
        setSelectedHomeType("");
    }, [status]);

    //builds filter objects when search button is clicked
    const handleSearch = () => {
        const filters: {
            location: string;
            status_type: string;
            home_type?: string;
            maxPrice?: number;
            rentMaxPrice?: number;
        } = {
            location,
            status_type: status,
        };
        //set specific rent attribute associated with each status type
        if (selectedHomeType) filters.home_type = selectedHomeType;
        if (status === "ForRent" && rentMaxPrice !== undefined)
            filters.rentMaxPrice = rentMaxPrice;
        if (
            (status === "ForSale" || status === "RecentlySold") &&
            maxPrice !== undefined
        )
            filters.maxPrice = maxPrice;
        console.log(filters);

        onSearchAction(filters);
    };

//returns the filter bar
    return (
        <FilterWrapper>
        <Box display="flex" flexWrap="wrap" gap={2} maxWidth="50%">
            <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />

            <FormControl sx={{minWidth: "12vw"}}>
                <InputLabel>Status Type</InputLabel>
                <Select
                    value={status}
                    label="Status Type"
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    {status_type.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {status && (
                <FormControl sx={{minWidth: "12vw"}}>
                    <InputLabel>Home Type</InputLabel>
                    <Select
                        value={selectedHomeType}
                        label="Home Type"
                        onChange={(e) => setSelectedHomeType(e.target.value)}
                    >
                        {home_types.map((type) => (
                            <MenuItem key={type} value={type}>
                                {type}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
            )}

            {status === "ForRent" && (
                <TextField
                    label="Max Rent"
                    type="number"
                    value={rentMaxPrice || ""}
                    onChange={(e) => setRentMaxPrice(Number(e.target.value))}
                />
            )}

            {(status === "ForSale" || status === "RecentlySold") && (
                <TextField
                    label="Max Price"
                    type="number"
                    value={maxPrice || ""}
                    onChange={(e) => setMaxPrice(Number(e.target.value))}
                />
            )}

            <Button variant="contained" onClick={handleSearch}>
                Search
            </Button>
        </Box>
        </FilterWrapper>
    );
}
