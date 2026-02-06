import {
  Calendar,
  Check,
  CircleDollarSign,
  ClockPlus,
  FolderPlus,
  Mail,
  Phone,
  Proportions,
  Search,
  Star,
  TrendingDown,
  UsersRound,
} from "lucide-react";
import { patients, patientTabStatsAdmin } from "../../common/mock-data";
import { Card, CardContent } from "../../ui/card";
import { Button } from "../../ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "../../ui/avatar";
import { ToggleButton } from "../../common/toggle";
import BarChart from "../../common/barchart";
import NoShowLineChart from "../../common/NoShowRate";

const performance = [
  {
    title: "Average Wait Time",
    value: "4.3 days",
    label: "Below target of 7 days",
  },
  {
    title: "Slots Filled by Smart Allocation",
    value: "78%",
    label: "AI optimization rate",
  },
  {
    title: "Recall Compliance Rate",
    value: "86%",
    label: "Patients returning on time",
  },
  {
    title: "Online Booking Rate",
    value: "91%",
    label: "Self-service adoption",
  },
];
export default function AnalyticsPage() {
  return (
    <div className="space-y-4">
      <h2 className="text-3xl font-bold mb-2">Analytics & Reports</h2>

      {/* Stats Grid */}
      <div className="grid md:grid-cols-4 gap-3 mb-8">
        <Card className="border-l-4 rounded-md border-l-[#0066CC] [box-shadow:0_4px_6px_-1px_rgba(0,102,204,0.4),0_2px_4px_-2px_rgba(0,102,204,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">Monthly Revenue</p>
                  <p className="text-2xl font-bold">$24.6K</p>
                </div>
                <div className="w-10 h-10 bg-[#0066CC] rounded-sm flex items-center justify-center">
                  <CircleDollarSign className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs">↗ 12% increase from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#FFD93D] [box-shadow:0_4px_6px_-1px_rgba(255,217,61,0.4),0_2px_4px_-2px_rgba(255,217,61,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">
                    Patient Satisfaction
                  </p>
                  <p className="text-2xl font-bold">4.7/5.0</p>
                </div>
                <div className="w-10 h-10 bg-[#FFD93D] rounded-sm flex items-center justify-center">
                  <Star className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs text-[#51CF66]">↗ Based on 247 reviews</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#51CF66] [box-shadow:0_4px_6px_-1px_rgba(81,207,102,0.4),0_2px_4px_-2px_rgba(81,207,102,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">
                    Avg Booking Lead Time
                  </p>
                  <p className="text-2xl font-bold">8d</p>
                </div>
                <div className="w-10 h-10 bg-[#51CF66] rounded-sm flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs text-[#51CF66]">Optimal range</p>
            </div>
          </CardContent>
        </Card>
        <Card className="border-l-4 rounded-md border-l-[#FF6B6B] [box-shadow:0_4px_6px_-1px_rgba(255,107,107,0.4),0_2px_4px_-2px_rgba(255,107,107,0.3)]">
          <CardContent className="pt-4 px-3">
            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-black mb-1">Cancellation Rate</p>
                  <p className="text-2xl font-bold">5.2%</p>
                </div>
                <div className="w-10 h-10 bg-[#FF6B6B] rounded-sm flex items-center justify-center">
                  <TrendingDown className="w-6 h-6 text-white" />
                </div>
              </div>
              <p className="text-xs">↘ Decreased by 1.8%</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card className="p-4">
          <h2 className="text-sm font-semibold mb-3">
            Number of Appointments per Day
          </h2>
          <BarChart />
        </Card>
        <Card>
          <CardContent className="p-4">
            <h2 className="text-sm font-semibold mb-3">No-Show Rate (Daily)</h2>
            <NoShowLineChart />
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent className="p-4 space-y-4">
          <div className="flex flex-col md:flex-row gap-2 justify-between">
            <h2 className="text-lg font-semibold">
              Key Performance Indicators
            </h2>

            <Button size="sm" className="cursor-pointer" variant={"outline"}>
              <Proportions className="w-4 h-4" />
              Export Reports
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {performance.map((per, idx) => (
              <Card
                className="gap-1 rounded-sm px-3 py-2 bg-[#E6E6E6]"
                key={idx}
              >
                <p className="font-semibold">{per.title}</p>
                <p className="font-normal">{per.value}</p>
                <p className="font-normal">{per.label}</p>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
