import { useState } from "react";
import DiaryHeader from "../../clinic-diary/header";
import OptometristTabs from "../../clinic-diary/optometristTab";
import DoctorColumn from "../../clinic-diary/doctorColumn";
import { doctors } from "../../common/mock-data";

export default function ClinicDiary() {
  const [activeDoctor, setActiveDoctor] = useState("all");
  const [date, setDate] = useState("January 13, 2026");

  const filteredDoctors =
    activeDoctor === "all"
      ? doctors
      : doctors.filter((d) => d.id === activeDoctor);

  return (
    <div className="bg-white rounded-xl p-6">
      <h1 className="text-xl font-bold mb-4">Clinic Diary</h1>

      <DiaryHeader
        date={date}
        onPrev={() => setDate("January 12, 2026")}
        onToday={() => setDate("January 13, 2026")}
        onNext={() => setDate("January 14, 2026")}
      />

      <OptometristTabs active={activeDoctor} setActive={setActiveDoctor} />

      <div className="grid md:grid-cols-3 gap-6">
        {filteredDoctors.map((doctor) => (
          <DoctorColumn key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
