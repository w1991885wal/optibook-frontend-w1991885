import AppointmentBlock from "./AppointmentBlock";

export default function TimeSlot({ time, appointment }) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-4 items-start">
      <div className="text-sm text-gray-600 pt-3">{time}</div>

      <div className="min-h-13">
        {appointment ? (
          <AppointmentBlock data={appointment} />
        ) : (
          <div className="h-13 rounded-md border border-dashed" />
        )}
      </div>
    </div>
  );
}
