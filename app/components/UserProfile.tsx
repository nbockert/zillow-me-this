//auth lucy scho
'use client';
import { useSession } from 'next-auth/react';
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";
import {Avatar, Box, Typography} from "@mui/material";

export default function UserProfile() {
    const { data: session, status } = useSession();

    if (status === 'loading') {
        return <p>Loading...</p>;
    }

    if (!session) {
        return <div>
            <p>You are not signed in</p>
            <SignInButton/>
        </div>

    }

    return (

        <div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                sx={{
                    backgroundColor: "#ffffffcc",
                    borderRadius: "12px",
                    padding: "0.75rem 1rem",
                    boxShadow: 1,
                    position: "absolute",
                    right: "1rem",
                    top: "0.5rem",
                }}
            >
            <Avatar
                alt={session.user?.name || ""}
                src={session.user?.image || ""}
                sx={{ width: 48, height: 48, mb: 1 }}
            />
            <Typography
                sx={{
                    fontFamily: "Fraunces",
                    fontSize: "0.9rem",
                    textAlign: "center",
                    color: "#205781",
                    mb: 1,
                }}
            >
                {session.user?.name}
            </Typography>
                <SignOutButton/>
            </Box>
        </div>
    );
}
