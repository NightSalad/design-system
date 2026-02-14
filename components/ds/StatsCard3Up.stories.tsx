import type { Meta, StoryObj } from "@storybook/react";
import { StatsCard3Up } from "./StatsCard3Up";

const meta: Meta<typeof StatsCard3Up> = {
  title: "Patterns/StatsCard3Up",
  component: StatsCard3Up,
  parameters: {
    layout: "centered",
  },
};
export default meta;

type Story = StoryObj<typeof StatsCard3Up>;

const Wrapper = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-[var(--surface-canvas)] p-8">
    <div className="w-[780px] max-w-full">{children}</div>
  </div>
);

export const Default: Story = {
  args: {
    items: [
      {
        label: "Total balance",
        value: "$38,400",
        footnote: "+3.2% vs last month",
        valueTone: "success",
      },
      {
        label: "Monthly cash flow",
        value: "+1,230",
        footnote: "Income − Expenses",
        valueTone: "success",
      },
      {
        label: "Available cash",
        value: "$6,200",
        footnote: "Updated 2 min ago",
        valueTone: "default",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <StatsCard3Up {...args} />
    </Wrapper>
  ),
};

export const WarningAndError: Story = {
  args: {
    items: [
      {
        label: "Pending transfers",
        value: "3",
        footnote: "Need review",
        valueTone: "warning",
      },
      {
        label: "Failed payments",
        value: "2",
        footnote: "Last 24 hours",
        valueTone: "error",
      },
      {
        label: "Disputes",
        value: "1",
        footnote: "Open case",
        valueTone: "default",
      },
    ],
  },
  render: (args) => (
    <Wrapper>
      <StatsCard3Up {...args} />
    </Wrapper>
  ),
};

export const NoFootnotes: Story = {
  args: {
    items: [
      { label: "Total balance", value: "$38,400", valueTone: "default" },
      { label: "Monthly cash flow", value: "+1,230", valueTone: "success" },
      { label: "Available cash",
