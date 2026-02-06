export default function OptometristTabs({ active, setActive }) {
  const tabs = ["all", "emma", "james", "sarah"];

  return (
    <div className="flex gap-2 mb-6">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => setActive(tab)}
          className={`px-4 py-2 rounded-md text-sm border
            ${active === tab ? "bg-black text-white" : "bg-white"}`}
        >
          {tab === "all"
            ? "All Optometrists"
            : `Dr. ${tab.charAt(0).toUpperCase() + tab.slice(1)}`}
        </button>
      ))}
    </div>
  );
}
