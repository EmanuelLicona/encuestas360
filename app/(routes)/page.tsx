import { UserRound } from "lucide-react";
import { CardSummary } from "./components/CardSummary";
import { LastCustomers } from "./components/LastCustomers";

const dataCardSummary = [
  {
    icon: UserRound,
    total: "12,450",
    average: 12.45,
    title: "Usuarios",
    tooltipText: "Este es un texto de ayuda",
  },
  {
    icon: UserRound,
    total: "12,450",
    average: 12.45,
    title: "Usuarios",
    tooltipText: "Este es un texto de ayuda",
  },
  {
    icon: UserRound,
    total: "12,450",
    average: 60,
    title: "Usuarios",
    tooltipText: "Este es un texto de ayuda",
  },
];

export default function Home() {
  return (
    <div>
      <h2 className="text-2xl mb-4">Dashbord</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-20">
        {dataCardSummary.map((item, index) => (
          <CardSummary key={index}
            icon={item.icon}
            total={item.total}
            average={item.average}
            title={item.title}
            tooltipText={item.tooltipText}
          />
        ))}
      </div>



      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-10 mt-12">
        <LastCustomers />
        <p>Sales Distribution</p>
      </div>

    </div>
  );
}
