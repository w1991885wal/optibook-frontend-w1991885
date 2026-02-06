import AppointmentItem from "./appointmentItem";

export default function DoctorColumn({ doctor }) {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold">{doctor.name}</h3>
      <p className="text-xs text-gray-500 mb-3">
        {doctor.room} • {doctor.schedule.filter((s) => !s.isLunch).length}{" "}
        appointments today
      </p>

      <div className="space-y-2">
        {doctor.schedule.map((slot, i) => (
          <AppointmentItem key={i} slot={slot} />
        ))}
      </div>
    </div>
  );
}
