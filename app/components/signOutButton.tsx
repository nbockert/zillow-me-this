//auth: lucy scho
"use client";

import { signOut, useSession } from "next-auth/react";
import { Button } from "@mui/material";

export default function SignOutButton() {
    const { data: session, status } = useSession();

    if (status !== "authenticated") return null;

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
