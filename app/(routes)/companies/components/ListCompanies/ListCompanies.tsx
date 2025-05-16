import { db } from "@/lib/db";
import { DataTable } from "./data-table";
import { columns } from "./columns";

export default async function ListCompanies() {

    // const { userId } = auth();
    // if (!userId) {
    //     redirect("/login");
    // }


    const companies = await db.company.findMany({
        orderBy: {
            createdAt: "desc",
        },
    });

    return (
        <DataTable data={companies} columns={columns} />
    );
}