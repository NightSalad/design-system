import type { Meta, StoryObj } from "@storybook/react";

const meta: Meta = {
  title: "Foundations/Typography",
};
export default meta;

type Story = StoryObj;

const SAMPLE =
  "Revenue €12,450.32 · Transactions updated 2 minutes ago";

function Row({
  label,
  font,
  size,
  weight = "--weight-regular",
}: {
  label: string;
  font: string;
  size: string;
  weight?: string;
}) {
  return (
    <div className="border-b border-[var(--border-subtle)] py-4">
      <div className="text-[var(--text-sm)] text-[var(--fg-secondary)]">
        {label}
      </div>
      <div
        style={{
          fontFamily: `var(${font})`,
          fontSize: `var(${size})`,
          lineHeight: "var(--leading-normal)",
          fontWeight: `var(${weight})`,
        }}
      >
        {SAMPLE}
      </div>
    </div>
  );
}

export const Scale: Story = {
  render: () => (
    <div className="bg-[var(--surface-canvas)] p-8 text-[var(--fg)]">
      {/* Headings */}
      <Row
        label="Heading 1 — Space Grotesk"
        font="--font-heading"
        size="--heading-1"
        weight="--weight-semibold"
      />
      <Row
        label="Heading 2 — Space Grotesk"
        font="--font-heading"
        size="--heading-2"
        weight="--weight-semibold"
      />
      <Row
        label="Heading 3 — Space Grotesk"
        font="--font-heading"
        size="--heading-3"
        weight="--weight-medium"
      />

      <div className="mt-8" />

      {/* Body */}
      <Row label="Body LG — Inter" font="--font-body" size="--text-lg" />
      <Row label="Body MD — Inter" font="--font-body" size="--text-md" />
      <Row label="Body SM — Inter" font="--font-body" size="--text-sm" />
      <Row label="Caption — Inter" font="--font-body" size="--text-xs" />
    </div>
  ),
};
