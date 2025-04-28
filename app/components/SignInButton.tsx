//auth: lucy scho
//this file handles the sign-in button logic, it renders the button and uses an
//onClick event to trigger OAuth
"use client";
import { signIn } from "next-auth/react";
//import sign in button from next-auth
import { Button } from "@mui/material";

export default function SignInButton() {
    return (
        <Button variant="contained" onClick={() => signIn("google", { callbackUrl: "/" })}>
            Sign in with Google
        </Button>
    );
}
