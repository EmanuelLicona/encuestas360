import { Navbar } from "@/components/Navbar"

export default function LayoutDashboard({ children }: { children: React.ReactElement }) {
  return (
    <div className="flex w-full h-full">
      <div className="hidden lg:block w-80 h-full lg:fixed">
        sidebar
      </div>

      <div className="w-full lg:ml-80">
        <Navbar />

        <div className="p-6 bg-[#fafbfc] dark:bg-secondary">
          {children}
        </div>
      </div>
    </div >);
}