//author: Nora Bockert
import React from "react";
import {Box} from "@mui/material";
import Image from "next/image";
import UserProfile from "./userProfile";

const Header = () => {
    return (
        <Box
            component="header"
            sx={{
                width: "100vw",
                backgroundColor: "#a1e3f9",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                margin: 0,
                boxShadow: 1,
                flex: 1,
            }}
        >
            <Box sx={{ paddingTop: 2, alignItems: "center", justifyContent: "center" }}>

            <Image
                src="/logo.png"
                alt="Logo"
                width={354}
                height={154}
                style={{ maxWidth: "100vw", height: "auto" }}
            />
            </Box>
            <UserProfile />
        </Box>
    );
};

export default Header;
