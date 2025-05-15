import { BarChart4, Building2, Calendar, CircleHelpIcon, PanelsTopLeft, Settings, ShieldCheck } from 'lucide-react';


export const dataGeneralSidebar = [
  {
    icon: PanelsTopLeft,
    label: "Dashboard",
    href: "/",
  },
  {
    icon: Building2,
    label: "Campaigns",
    href: "/campaigns",
  },
  {
    icon: Calendar,
    label: "Calendar",
    href: "/tasks",
  },
]


export const dataToosSidebar = [
  {
    icon: CircleHelpIcon,
    label: "faqs",
    href: "/faqs",
  },
  {
    icon: BarChart4,
    label: "Analytics",
    href: "/analytics",
  },
]

export const dataSupportSidebar = [
  {
    icon: Settings,
    label: "Settings",
    href: "/settings",
  },
  {
    icon: ShieldCheck,
    label: "Security",
    href: "/security",
  },
]