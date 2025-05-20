"use client"


import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SidebarRoutes } from "../SidebarRoutes";
import { ToggleTheme } from "../ToggleTheme";

import { signOut } from "next-auth/react";

export function Navbar() {

  const closeSession = async () => {
    await signOut()
  }

  return (
    <nav className="flex items-center px-2 gap-x-4 md:px-6
      justify-between w-full bg-background border-b h-20">
      <div className="block lg:hidden">
        <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SheetHeader className="hidden">
              <SheetTitle></SheetTitle>
            </SheetHeader>
            <SidebarRoutes />
          </SheetContent>
        </Sheet>
      </div>

      <div className="relative w-[300px]">
        <Input placeholder="Buscar..." className="rounded-lg" />
        <Search strokeWidth={1} className="absolute right-2 top-2 " />
      </div>

      <div className="flex gap-x-2 items-center">
        <ToggleTheme />
        <Button variant="outline" onClick={closeSession} >User</Button>
      </div>

    </nav>
  );
}