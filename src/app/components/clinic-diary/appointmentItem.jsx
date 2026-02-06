export default function AppointmentItem({ slot }) {
  if (slot.isLunch) {
    return (
      <div className="bg-yellow-100 text-yellow-900 px-3 py-2 rounded-md text-sm">
        🍽 {slot.time} • Lunch
      </div>
    );
  }

  return (
    <div className="bg-blue-50 px-3 py-2 rounded-md text-sm">
      <span className="font-medium">{slot.time}</span>
      <span className="ml-2">• {slot.patient}</span>
    </div>
  );
}
