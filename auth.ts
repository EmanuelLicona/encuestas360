import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"

// import { saltAndHashPassword } from "@/lib/password"
import { getUserFromDb } from "@/lib/user-database"

export const { handlers, signIn, signOut, auth } = NextAuth({
    providers: [
        Credentials({
            name: "Credentials",
            credentials: {
                email: {},
                password: {},
            },
            authorize: async (credentials) => {
                let user = null

                // const pwHash = saltAndHashPassword(credentials.password as string)

                user = await getUserFromDb(credentials.email as string, "")

                if (!user) {
                    throw new Error("Invalid credentials.")
                }

                // return user object with their profile data
                return user
            },
        }),
    ],

    callbacks: {
        async jwt({ token, account }) {
            if (account?.provider === "credentials") {
                token.credentials = true;
            }
            return token;
        },
    },

    jwt: {
        encode: async function (params) {
        },

    })