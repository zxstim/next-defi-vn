import NextAuth from "next-auth";
import EmailProvider from "next-auth/providers/email";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "../../../lib/prismadb.ts";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      id: "webauthn",
      name: "Biometric",
      type: "credentials",
      credentials: {
        username: {
          label: "Username", type: "text", placeholder: "jsmith"
        }
      },
      async authorize(credentials, req) {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials.username
          }
        })
        if (user) {
          return user
        } else {
          return null
        }
      }
    }),
    // EmailProvider({
    //   id: "email",
    //   server: process.env.EMAIL_SERVER,
    //   from: process.env.EMAIL_FROM,
    // }),
    GoogleProvider({
      id: "google",
      type: "oauth",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
    GitHubProvider({
      id: "github",
      type: "oauth",
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
      allowDangerousEmailAccountLinking: true
    }),
  ],
  pages: {
    signIn: "auth/signin",
  }
  // callbacks: {
  //   async jwt({ token, account, profile }) {
  //     // Persist the OAuth access_token and or the user id to the token right after signin 
  //     token.profile = await prisma.user.findUnique({
  //       where: {
  //         id: token.sub
  //       }
  //     })
  //     return token
  //   },
  //   async session({ session, token, user }) {
  //     // Send properties to the client, like an access_token and user id from a provider.
  //     session.user.profile = token.profile
  //     return session
  //   }
  // },
}

export default NextAuth(authOptions)