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
                return {
                    ...user,
                    access: [
                        "section.create",
                        "section.read",
                        "section.update",
                        "section.delete",
                        "company.create",
                        "company.read",
                        "company.update",
                        "company.delete",
                        "question.create",
                        "question.read",
                        "question.update",
                        "question.delete",
                        "answer.create",
                        "answer.read",
                        "answer.update",
                        "answer.delete",
                        "user.create",
                        "user.read",
                        "user.update",
                        "user.delete",
                        "admin.create",
                        "admin.read",
                        "admin.update",
                        "admin.delete",
                    ]
                }
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
                token.email = user.email as string
                token.access = user.access
            }
            return token
        },
        session: async ({ session, token }) => {
            if (token?.userId) {
                session.user.id = token.userId as string
                session.user.email = token.email as string
                session.user.access = token.access as string[]
            }
            return session
        },
    },
    trustHost: true,
} satisfies NextAuthConfig