import { PrismaClient } from "@/prisma/generated/prisma/client";

/* eslint-disable no-var */
declare global {
    var prisma: PrismaClient | undefined;
}
/* eslint-enable no-var */

export const db = globalThis.prisma || new PrismaClient({
    // log: process.env.NODE_ENV === "development"
    //     ? ["query", "info", "warn", "error"]
    // : [],
});

if (process.env.NODE_ENV !== "production") globalThis.prisma = db;
