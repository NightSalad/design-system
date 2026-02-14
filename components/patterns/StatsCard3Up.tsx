import * as React from "react";
import { Card } from "@/components/ds/Card";
import { CardContent } from "@/components/ds/CardContent";

type Stat = {
  label: string;
  value: string;
  footnote?: string;
  valueTone?: "default" | "success" | "warning" | "error";
};

function toneClass(tone: Stat["valueTone"]) {
  switch (tone) {
    case "success":
      return "text-[var(--fg-success)]";
    case "warning":
      return "text-[var(--fg-warning)]";
    case "error":
      return "text-[var(--fg-error)]";
    default:
      return "text-[var(--fg)]";
  }
}

export function StatsCard3Up({ items }: { items: [Stat, Stat, Stat] }) {
  return (
    <Card>
      <CardContent className="inline-block">
        <div className="grid grid-cols-3">
          {items.map((s, i) => (
            <div
              key={s.label}
              className={[
                "px-6 py-5",
                i > 0 ? "border-l border-[var(--border-separator)]" : "",
              ].join(" ")}
            >
              <div className="text-[var(--fg-secondary)] text-[14px] font-[500]">
                {s.label}
              </div>

              <div className={["mt-2 text-[32px] leading-none font-[600]", toneClass(s.valueTone)].join(" ")}>
                {s.value}
              </div>

              {s.footnote ? (
                <div className="mt-3 text-[14px] text-[var(--fg-secondary)]">
                  {s.footnote}
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
