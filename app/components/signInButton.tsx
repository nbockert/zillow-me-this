//auth: lucy scho
"use client";
import { signIn } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignInButton() {
    return (
        <Button variant="contained" onClick={() => signIn("google", { callbackUrl: "/" })}>
            Sign in with Google
        </Button>
    );
}
