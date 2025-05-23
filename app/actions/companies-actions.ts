import { db } from "@/lib/db";


export const getCompanies = async () => {
    const companies = await db.company.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return companies;
}