import { auth } from "@/auth/auth";
import { FormLogin } from "./components/Index";
import { redirect } from "next/navigation";

export default async function LoginPage() {

  const session = await auth()

  if (session) redirect("/")

  return (
    <div className="flex min-h-svh w-full items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-sm">
        <FormLogin />
      </div>
    </div>
  )
}
