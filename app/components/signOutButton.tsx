//auth: lucy scho
"use client";
////this file handles the sign-out button logic, it renders the button and checks to ensure the user is
// currently autheniticated before appearing

import { signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignOutButton() {
    const { data: session, status } = useSession();
// Get the current authentication session and status
    if (status !== "authenticated") return null;
    // If the user is not authenticated, do not render anything
    return (
        <Button
            variant="outlined"
            color="error"
            onClick={() => signOut({ callbackUrl: "/" })}
        >
            Sign Out
        </Button>
    );
}
