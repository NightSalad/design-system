import type { Meta, StoryObj } from "@storybook/react";
import { Card } from "./Card";
import { CardContent } from "./CardContent";

const meta: Meta<typeof Card> = {
  title: "DS/Card",
  component: Card,
};
export default meta;

type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <div className="bg-[var(--surface-canvas)] p-6">
      <Card className="w-80">
        <CardContent>
          <div className="font-medium">Card</div>
          <div className="mt-2 text-[var(--fg-secondary)]">
            Proper spacing via CardContent
          </div>
        </CardContent>
      </Card>
    </div>
  ),
};
