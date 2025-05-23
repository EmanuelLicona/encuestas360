import bcrypt from "bcryptjs"

export default async function saltAndHashPassword(password: string) {
    if (!password) throw new Error("Password is required")
    const salt = await bcrypt.genSalt(10);

    return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string) {
    return await bcrypt.compare(password, hashedPassword)
}