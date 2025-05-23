
import { Logo } from "../Logo";
import { SidebarRoutes } from "../SidebarRoutes";

export function Sidebar() {
  return (
    <div className="h-full flex flex-col border-r">
      <Logo />
      <SidebarRoutes />
    </div>
  );
}