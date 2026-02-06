import {
  CalendarCheck,
  Hourglass,
  Sparkles,
  TriangleAlert,
} from "lucide-react";
import { Card, CardContent } from "../../ui/card";

const quickStats = [
  { label: "Total Appointments", value: "328" },
  { label: "Completed", value: "312" },
  { label: "Cancelled", value: "8" },
  { label: "No-Shows", value: "8" },
  { label: "Revenue (Est.)", value: "$ 24,600" },
];

const staffsOverview = [
  {
    name: "Dr. Emma Wilson",
    appointments: "8",
    utilization: "87%",
  },
  {
    name: "Dr. James Chen",
    appointments: "6",
    utilization: "70%",
  },
  {
    name: "Dr. Sarah Miller",
    appointments: "3",
    utilization: "97%",
  },
];

export default function DashboardPage() {
  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-3xl font-bold mb-2">System Overview</h2>
        <p className="text-gray-600">
          Manage your clinic operations and monitor performance
        </p>
      </div>

      {/* Stats */}
      <div className="grid md:grid-cols-4 gap-3 mb-8">
        <Card className="border-l-4 rounded-md border-l-[#0066CC] [box-shadow:0_4px_6px_-1px_rgba(0,102,204,0.4),0_2px_4px_-2px_rgba(0,102,204,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">
                    Today's Appointments
                  </p>
                  <p className="text-2xl font-bold">24</p>
                </div>
                <div className="w-10 h-10 bg-[#0066CC] rounded-sm flex items-center justify-center">
                  <CalendarCheck className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs">Across 3 optometrists</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#FFD93D] [box-shadow:0_4px_6px_-1px_rgba(255,217,61,0.4),0_2px_4px_-2px_rgba(255,217,61,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">Clinic Utilization</p>
                  <p className="text-2xl font-bold">87%</p>
                </div>
                <div className="w-10 h-10 bg-[#FFD93D] rounded-sm flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-xs text-[#51CF66]">↗ 5% higher than target</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#51CF66] [box-shadow:0_4px_6px_-1px_rgba(81,207,102,0.4),0_2px_4px_-2px_rgba(81,207,102,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">No-Show Rate</p>
                  <p className="text-2xl font-bold">3.8%</p>
                </div>
                <div className="w-10 h-10 bg-[#51CF66] rounded-sm flex items-center justify-center">
                  <TriangleAlert className="w-6 h-6 text-black" />
                </div>
              </div>
              <p className="text-xs text-[#51CF66]">↘ Decreased by 2.1%</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#FF6B6B] [box-shadow:0_4px_6px_-1px_rgba(255,107,107,0.4),0_2px_4px_-2px_rgba(255,107,107,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">Total Waitlist</p>
                  <p className="text-2xl font-bold">12</p>
                </div>
                <div className="w-10 h-10 bg-[#FF6B6B] rounded-sm flex items-center justify-center">
                  <Hourglass className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs">6 high priority</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <Stats quickStats={quickStats} staffsOverview={staffsOverview} />

      {/* Quick stats + staff overview */}
    </div>
  );
}

function Stats({ quickStats, staffsOverview }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-3">
      {/* Quick Stats Card */}
      <Card className="py-4">
        <CardContent className="space-y-4">
          <h2 className="text-lg font-semibold">
            Clinic Performance This Month
          </h2>
          <div className="space-y-2">
            {quickStats.map((stat, idx) => (
              <div
                key={idx}
                className={`flex justify-between items-center px-3 py-2 ${
                  idx !== quickStats.length - 1
                    ? "border-b border-gray-200"
                    : ""
                }`}
              >
                <span>{stat.label}</span>
                <strong>{stat.value}</strong>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Recent Notifications Card */}
      <Card className="py-4">
        <CardContent className="space-y-2">
          <h2 className="text-lg font-semibold">Staff Overview</h2>
          <div className="flex flex-col gap-2">
            {staffsOverview.map((staff, idx) => (
              <Card
                className="gap-0 rounded-sm px-3 py-2 bg-[#E6E6E6]"
                key={idx}
              >
                <p className="font-semibold">{staff.name}</p>
                <div className="text-sm text-gray-500 flex flex-wrap gap-1">
                  Today: {staff.appointments} appointments
                  <span className="opacity-90">
                    • Utilization: {staff.utilization}
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
