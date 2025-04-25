//author: Nora Bockert
import React from "react";
import {Box, Link, Typography} from "@mui/material";
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
                justifyContent: "space-between",
                padding: 0,
                margin: 0,
                boxShadow: 1,
                flex: 1,
            }}
        >

            <Link href='/'>
                <Typography variant="h4" sx={{color:'#508D4E',fontWeight: 300, textDecoration: "none", padding: "1rem"}}><strong>ZillowMeThis</strong></Typography>
            </Link>
            <Image
                src="/logo.png"
                alt="Logo"
                width={354}
                height={154}
                style={{ maxWidth: "100vw", height: "auto" }}
            />
            <UserProfile />
        </Box>
    );
};

export default Header;
