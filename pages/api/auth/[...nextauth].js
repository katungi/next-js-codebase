import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';

const options = {
    site: process.env.SITE || 'http://localhost:3000',

    providers: [
        Providers.Google({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SECRET,
        }),

    ],
    database: process.env.DATABASE_URL
}

export default (req, res) => NextAuth(req, res, options);