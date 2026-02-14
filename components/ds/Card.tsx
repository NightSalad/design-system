import * as React from "react";

export type CardProps = React.PropsWithChildren<{
  className?: string;
  bordered?: boolean;
}>;

export function Card({
  children,
  className,
  bordered = true,
}: CardProps) {
  return (
    <div
      className={[
        "bg-[var(--surface-default)] text-[var(--fg)]",
        "rounded-[var(--radius-card)]",
        bordered
          ? "border border-[var(--border-subtle)]"
          : "border border-transparent",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
