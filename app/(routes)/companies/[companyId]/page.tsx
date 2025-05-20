import { db } from "@/lib/db"
import { redirect } from "next/navigation";

import Header from "./components/Header/Header";
import CompanyInformation from "./components/CompanyInformation/CompanyInformation";


type PageProps = {
    params: Promise<{
        companyId: string
    }>
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export default async function CompanyIdPage({ params }: PageProps) {

    const { companyId } = await params;

    // const userId = auth();
    // if (!userId) return redirect('/login');

    const company = await db.company.findUnique({
        where: {
            id: companyId
        }
    });

    if (!company) return redirect('/companies');

    return (
        <div>
            <Header />
            
            <CompanyInformation company={company} />

            <p>Footer Company</p>
        </div>
    )
}
