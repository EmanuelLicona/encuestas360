import { Menu, Search } from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "../ui/sheet";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { SidebarRoutes } from "../SidebarRoutes";

export function Navbar() {
  return (
    <div className="flex items-center px-2 gap-x-4 md:px-6
      justify-between w-full bg-background border-b h-20">
      <div className="block md:hidden">

        {/* <Sheet>
          <SheetTrigger className="flex items-center">
            <Menu />
          </SheetTrigger>
          <SheetContent side="left">
            <SidebarRoutes />
          </SheetContent>
        </Sheet> */}

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
        <p>toggle theme</p>
        <Button variant="outline">User</Button>
      </div>

    </div>
  );
}