//auth: lucy schofield
"use client";
import SignInButton from "./signInButton";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LogInPage() {
    const { data: session, status } = useSession();
    const router = useRouter();

    useEffect(() => {
        if (status === "authenticated") {
            router.push("/");
        }
    }, [status, router]);

    return (
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
