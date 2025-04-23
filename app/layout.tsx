"use client"
import React from "react"
import styled from "styled-components"
import theme from "@/app/theme";
import { ThemeProvider } from "@mui/material/styles";
import { SessionProvider } from 'next-auth/react'

const Body = styled.body`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #BDDDE4;
`
export default function RootLayout({children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8"/>
            <title>Zillow Me This</title>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin=""/>
            <link
                href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,100..900;1,9..144,100..900&display=swap"
                rel="stylesheet"/>
        </head>
        <Body>
            <SessionProvider>
            <ThemeProvider theme={theme}>
            {children}
            </ThemeProvider>
            </SessionProvider>
        </Body>
        </html>
    );
}