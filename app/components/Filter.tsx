//author: Nora Bockert
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

const statusType = ["ForSale", "ForRent", "RecentlySold"];

type FilterBarProps = {
    onSearchAction: (filters: {
        location: string;
        statusType: string;
        homeType?: string;
        maxPrice?: number;
        rentMaxPrice?: number;
    }) => void;
};

const FilterWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: space-between;
    max-width: 100%;
`;

export default function FilterBar({ onSearchAction }: FilterBarProps) {
    const [status, setStatus] = useState<string>("");
    const [homeTypes, setHomeTypes] = useState<string[]>([]);
    const [location, setLocation] = useState<string>("");
    const [maxPrice, setMaxPrice] = useState<number | undefined>();
    const [rentMaxPrice, setRentMaxPrice] = useState<number | undefined>();
    const [selectedHomeType, setSelectedHomeType] = useState<string>("");

    useEffect(() => {
        if (status === "ForRent") {
            setHomeTypes(["Townhomes", "Houses", "Apartments_Condos_Co-ops"]);
        } else {
            setHomeTypes([
                "Multi-family",
                "Apartments",
                "Houses",
                "Manufactured",
                "Condos",
                "LotsLand",
                "Townhomes",
            ]);
        }
        setMaxPrice(undefined);
        setRentMaxPrice(undefined);
        setSelectedHomeType("");
    }, [status]);

    const handleSearch = () => {
        const filters: {
            location: string;
            statusType: string;
            homeType?: string;
            maxPrice?: number;
            rentMaxPrice?: number;
        } = {
            location,
            statusType: status,
        };

        if (selectedHomeType) filters.homeType = selectedHomeType;
        if (status === "ForRent" && rentMaxPrice !== undefined)
            filters.rentMaxPrice = rentMaxPrice;
        if (
            (status === "ForSale" || status === "RecentlySold") &&
            maxPrice !== undefined
        )
            filters.maxPrice = maxPrice;

        onSearchAction(filters);
    };


    return (
        <FilterWrapper>
        <Box display="flex" flexWrap="wrap" gap={2} justifyContent="space-between" maxWidth="100%">
            <TextField
                label="Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                required
            />

            <FormControl>
                <InputLabel>Status Type</InputLabel>
                <Select
                    value={status}
                    label="Status Type"
                    onChange={(e) => setStatus(e.target.value)}
                    required
                >
                    {statusType.map((type) => (
                        <MenuItem key={type} value={type}>
                            {type}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            {status && (
                <FormControl>
                    <InputLabel>Home Type</InputLabel>
                    <Select
                        value={selectedHomeType}
                        label="Home Type"
                        onChange={(e) => setSelectedHomeType(e.target.value)}
                    >
                        {homeTypes.map((type) => (
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
