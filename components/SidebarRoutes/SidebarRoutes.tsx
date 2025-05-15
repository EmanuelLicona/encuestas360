"use client";

import { SidebarItem } from "../SidebarItem.tsx";
import { Separator } from "../ui/separator";
import { dataGeneralSidebar, dataSupportSidebar, dataToosSidebar } from "./SidebarRoutes.data";

export function SidebarRoutes() {
  return (
    <div className="flex flex-col justify-between h-full">
      <div>
        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">GENERAL</p>
          {dataGeneralSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
        <Separator />

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">TOOLS</p>
          {dataToosSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>

        <div className="p-2 md:p-6">
          <p className="text-slate-500 mb-2">SUPPORT</p>
          {dataSupportSidebar.map((item) => (
            <SidebarItem key={item.label} item={item} />
          ))}
        </div>
      </div>
      <div>
        <Separator />
        <footer className="mt-3 p-3 text-center">
          2025, All Rights Reserved
        </footer>
      </div>
    </div >
  );
}