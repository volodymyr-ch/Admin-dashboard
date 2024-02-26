import type { Meta, StoryObj } from '@storybook/react';

import { SinglePerformanceWidget } from './SinglePerformanceWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SinglePerformanceWidget',
  component: SinglePerformanceWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SinglePerformanceWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Registrations',
    data: {
      sdk: {
        thisPeriod: 40,
        lastPeriod: 30,
      },
      integration: {
        thisPeriod: 40,
        lastPeriod: 30,
      },
    },
  },
};
