"use client"

import { ArrowLeft } from "lucide-react"
import { redirect, useRouter } from "next/navigation"

export default function Header() {
    const router = useRouter()

    return (
        <div className="flex items-center text-xl">

            <ArrowLeft className="w-5 h-5 mr-2" onClick={() => redirect('/companies')} />

            Edit Company
        </div>
    )
}
