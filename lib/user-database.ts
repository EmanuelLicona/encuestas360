import { db } from "./db";
import { verifyPassword } from "./password";

export default async function getUserFromDB(email: string, pass: string) {

    const user = await db.user.findFirst({
        where: {
            email: email,
        },
    });

    if (!user) return null

    const isPasswordValid = await verifyPassword(pass, user.password)

    if (!isPasswordValid) return null

    const { password, ...userWithoutPassword } = user

    return userWithoutPassword
}