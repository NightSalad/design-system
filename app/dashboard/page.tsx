import { StatsCard3Up } from "@/components/patterns/StatsCard3Up";

export default function DashboardPage() {
  return (
    <div className="bg-[var(--surface-canvas)] p-8 space-y-6">
      <StatsCard3Up
        items={[
          { label: "Total balance", value: "$38,400", valueTone: "success" },
          { label: "Monthly cash flow", value: "+1,230", valueTone: "success" },
          { label: "Available cash", value: "$6,200" },
        ]}
      />
      {/* more patterns here */}
    </div>
  );
}