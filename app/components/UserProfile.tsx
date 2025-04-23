//auth lucy scho
'use client';
import { useSession } from 'next-auth/react';
import SignInButton from "./SignInButton";
import SignOutButton from "./SignOutButton";

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
            <p>Welcome, {session.user?.name}</p>
            <img src={session.user?.image || ''} alt="User Avatar" />
            <SignOutButton />
        </div>
    );
}
