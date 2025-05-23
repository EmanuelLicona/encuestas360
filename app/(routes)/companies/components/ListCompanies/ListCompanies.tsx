// "use client";

// import { db } from "@/lib/db";
import { DataTable } from "./data-table";
import { columns } from "./columns";
import { getCompanies } from "@/app/actions/companies-actions";
// import { connection } from "next/server";
// import { useEffect, useState } from "react";
// import axios from "axios";

export default async function ListCompanies() {

    const companies  = await getCompanies();

    // await connection();

    // const { userId } = auth();
    // if (!userId) {
    //     redirect("/login");
    // }


    // const companies = await db.company.findMany({
    //     orderBy: {
    //         createdAt: "desc",
    //     },
    // });

    // const [companies, setCompanies] = useState([]);
    // const [isLoading, setIsLoading] = useState(false);

    // const fetchCompanies = async () => {
    //     // setIsLoading(true);
    //     try {
    //         const response = await axios.get("/api/company");
    //         const data = response.data;

    //         setCompanies(data);
    //     } catch (error) {
    //         console.error('Error fetching companies:', error);
    //     } finally {
    //         // setIsLoading(false);
    //     }
    // };

    // useEffect(() => {
    //     fetchCompanies();
    // }, []);

    return (
        <DataTable data={companies} columns={columns} />
    );
}