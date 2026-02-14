import * as React from "react";

export type CardContentProps = React.PropsWithChildren<{
  className?: string;
}>;

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div
      className={[
        "p-[var(--space-card)]",
        className ?? "",
      ].join(" ")}
    >
      {children}
    </div>
  );
}
