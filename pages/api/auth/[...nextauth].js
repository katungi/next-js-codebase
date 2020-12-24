import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = {
  site: process.env.NEXTAUTH_URL || "http://localhost:3000",
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
      authorizationUrl:
        "https://accounts.google.com/o/oauth2/v2/auth?prompt=consent&access_type=offline&response_type=code",
    }),
  ],  
  callbacks: {
    redirect: async (url, _) => {
      if (url === "/api/auth/signin") {
        return Promise.resolve("/experiences");
      }
      return Promise.resolve("/api/auth/signin");
    },
  },

  database: process.env.DATABASE_URL,

  secret: process.env.SECRET,

  debug: true,
};

export default (req, res) => NextAuth(req, res, options);
