import { useState } from "react";
import { Card, CardContent } from "../../ui/card";
import DiaryHeader from "../../common/diary/DiaryHeader";
import DayTabs from "../../common/diary/DayTabs";
import TimeSlot from "../../common/diary/TimeSlot";
import { appointments, timeSlots, weekDays } from "../../common/mock-data";

export default function Diary() {
  const [activeDay, setActiveDay] = useState("mon");

  return (
    <>
      <h1 className="mb-2 text-gray-400 font-normal">My Diary</h1>
      <Card>
        <CardContent className="p-6">
          <DiaryHeader />

          <DayTabs days={weekDays} active={activeDay} onChange={setActiveDay} />

          <div className="space-y-3">
            {timeSlots.map((time) => (
              <TimeSlot
                key={time}
                time={time}
                appointment={appointments[activeDay]?.[time]}
              />
            ))}
          </div>
        </CardContent>
      </Card>
    </>
  );
}
