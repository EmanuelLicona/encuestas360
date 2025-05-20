import getUserFromDB from "@/lib/user-database"
import { CredentialsSignin, type NextAuthConfig } from "next-auth"
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
                if (!user) throw new Error("Invalid credentials sssssss")
                return user
            },
        }),
    ],
    pages: {
        signIn: "/login",
    },
    // callbacks: {

    // },
    trustHost: true,
} satisfies NextAuthConfig