"use client";
import PropertySearchPage from '@/app/components/propertySearchPage';
import Header from '@/app/components/Header';
import { useSession } from "next-auth/react";
import LogInPage from "@/app/components/logInPage";
import {Link, Typography} from "@mui/material";
import React from "react";

export default function Home(){
    const { data: session, status } = useSession();

    if (status === "loading") {
        return (
            <p>loading...</p>
        );
    }

    if (!session) {
        return <LogInPage />;
    }
    return(
        <>
        <PropertySearchPage/>
        </>

    );
}