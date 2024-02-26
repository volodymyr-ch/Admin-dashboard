import type { Meta, StoryObj } from '@storybook/react';

import { SingleRevenueWidget } from './SingleRevenueWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SingleRevenueWidget',
  component: SingleRevenueWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SingleRevenueWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Registrations',
    data: {
      total: 123,
      averageCheck: 12312,
      purchases: 123123,
    },
  },
};
