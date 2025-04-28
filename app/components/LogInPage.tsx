//auth: lucy scho
//This is the login screen users are taken to when they enter the website. If the user is already
//logged in they are immediately redirected to the home page
"use client";
//uses hooks so needs client component
import SignInButton from "./SignInButton";
//imported from google sign in
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LoginPage() {
    const { data: session, status } = useSession();
    const router = useRouter();
    //gets state of current authentication and initalize the router

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);
    //user redirected if already logged in

    return (
        //login screen ui
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            minHeight="100vh"
            bgcolor="#BDDDE4"
        >
            <Typography variant="h3" sx={{ mb: 4, color: "#205781", fontFamily: "Fraunces" }}>
                Welcome to Zillow me this!
            </Typography>
            <Typography
                variant="subtitle1"
                sx={{
                    mb: 4,
                    fontFamily: "Fraunces",
                    color: "#4F959D",
                    maxWidth: "400px",
                    textAlign: "center",
                }}
            >
                Your new apartment hunting companion! Find apartments to rent or buy with one click!
            </Typography>
            <SignInButton />
        </Box>
    );
}
