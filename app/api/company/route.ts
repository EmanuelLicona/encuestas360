import { db } from "@/lib/db";
import { randomUUID } from "crypto";
import { NextResponse } from "next/server";





export async function POST(req: Request) {
    try {
        const data = await req.json();

        const company = await db.company.create({
            data: {
                userId: randomUUID(),
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


export async function GET() {
    try {
        const companies = await db.company.findMany({
            orderBy: {
                createdAt: "desc",
            },
        });
        return NextResponse.json(companies);
    }
    catch (error) {
        console.log(`[COMPANY] Error: ${error}`);
        return new NextResponse(`Internal Server Error`, { status: 500 });
    }
}