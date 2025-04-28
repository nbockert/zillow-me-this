//auth lucy scho
//This file creates a profile component in the top right of the page. It displays the user's profile,
//and name using data from the google Oauth sign in.
'use client';
import { useSession } from 'next-auth/react'; // user session data hook
import SignInButton from "./SignInButton"; // reusable sign-in button
import SignOutButton from "./SignOutButton"; // reusable sign-out button
import {Avatar, Box, Typography} from "@mui/material"; // mui for ui

export default function UserProfile() {
    const { data: session, status } = useSession();
// get session data and authentication status
    if (status === 'loading') {
        // if the session is still loading
        return <p>Loading...</p>;
    }
    if (!session) {
        //show sign in button
        return <div>
            <p>You are not signed in</p>
            <SignInButton/>
        </div>

    }
// if the user is signed in, show their profile card
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
                //google oauth component, used to display profile pic
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
