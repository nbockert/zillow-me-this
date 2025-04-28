//author lucy scho
//This file uses NextAuth to import GoogleProvider to set up google sign in.
import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';

//uses provided google OAuth set up
const handler = NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID!,
            //google Oauth client id in .env file
            clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
            //google Oauth client secret in .env file
        }),
    ],
    secret: process.env.NEXTAUTH_SECRET,
    // Secret used to sign and encrypt session tokens, provided by Oauth
});
//handler is exported, handles both GET and POST requests, important for re-authentification checks
export { handler as GET, handler as POST };
