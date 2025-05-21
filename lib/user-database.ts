import { db } from "./db";
import { verifyPassword } from "./password";

export default async function getUserFromDB(email: string, pass: string) {

    const user = await db.user.findFirst({
        where: {
            email: email,
        },
    });

    if (!user) throw new Error("No user found");

    const isPasswordValid = await verifyPassword(pass, user.password)
    if (!isPasswordValid) throw new Error("Invalid password");

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...userWithoutPassword } = user
    return userWithoutPassword
}