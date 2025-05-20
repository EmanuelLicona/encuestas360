import { db } from "@/lib/db";
import { NextRequest, NextResponse } from "next/server";


export async function PATCH(req: NextRequest, { params }: { params: Promise<{ companyId: string }> }) {

    const { companyId } = (await params);
    try {
        const data = await req.json();

        const company = await db.company.update({
            where: {
                id: companyId,
            },
            data: {
                ...data,
            },
        });
        
        return NextResponse.json(company);
    }
    catch (error) {
        console.log(`[COMPANY] Error: ${error}`);
        return new NextResponse(`Internal Server Error`, { status: 500 });
    }
}



