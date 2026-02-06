import { GripVertical } from "lucide-react";
import { cn } from "../../ui/utils";

export default function AppointmentBlock({ data }) {
  if (data.isBreak) {
    return (
      <div className="bg-yellow-100 text-yellow-900 px-4 py-3 rounded-md">
        🍽 Lunch Break
      </div>
    );
  }

  return (
    <div
      draggable
      className={cn(
        "flex items-center gap-3 px-4 py-3 rounded-md text-white",
        "bg-linear-to-r from-indigo-500 to-teal-600 cursor-move",
      )}
    >
      <GripVertical className="w-4 h-4 opacity-80" />
      <span className="font-semibold">{data.patient}</span>
      <span className="opacity-90">• {data.type}</span>
    </div>
  );
}
