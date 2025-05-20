import { ArrowDown, ArrowDownUp, ArrowUp } from "lucide-react";
import { SortIconDirection } from "./SortIcon.type";

interface SortIconProps {
    direction: SortIconDirection;
}

export function SortIcon({ direction }: SortIconProps) {
    if (direction === 'asc') return <ArrowUp className="w-4 h-4 ml-2" />;
    if (direction === 'desc') return <ArrowDown className="w-4 h-4 ml-2" />;

    return <ArrowDownUp className="w-4 h-4 ml-2" />;
}
