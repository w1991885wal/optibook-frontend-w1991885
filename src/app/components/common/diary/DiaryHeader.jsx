import { Button } from "../../ui/button";

export default function DiaryHeader() {
  return (
    <div className="flex items-center justify-between mb-6">
      <div>
        <h2 className="font-semibold text-lg">Week of January 13–19, 2026</h2>
        <p className="text-sm text-gray-500">Dr. Emma Wilson • Room 2</p>
      </div>

      <div className="flex gap-2">
        <Button variant="outline" size="sm">
          ‹ Previous
        </Button>
        <Button variant="outline" size="sm">
          Today
        </Button>
        <Button variant="outline" size="sm">
          Next ›
        </Button>
      </div>
    </div>
  );
}
