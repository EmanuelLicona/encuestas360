import getUserFromDB from "@/lib/user-database"
import { type NextAuthConfig } from "next-auth"
import Credentials from "next-auth/providers/credentials"

export default {
    providers: [
        Credentials({
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null
                user = await getUserFromDB(credentials.email as string, credentials.password as string)
                return user
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    callbacks: {
        jwt: async ({ token, user }) => {
            if (user) {
                token.userId = user.id
                token.email = user.email
                token.role = "ADMIN"
            }
            return token
        },
        session: async ({ session, token }) => {
            session.user.id = token.userId as string 
            session.user.email = token.email as string
            return session
        },
    },
    trustHost: true,
} satisfies NextAuthConfig