//auth: lucy scho
"use client";
import SignInButton from "../components/SignInButton";
import { Box, Typography } from "@mui/material";

export default function LoginPage() {
    return (
        <Box display="flex" flexDirection="column" alignItems="center" mt={4}>
            <Typography variant="h4" mb={2}>Welcome to My App</Typography>
            <SignInButton />
        </Box>
    );
}
