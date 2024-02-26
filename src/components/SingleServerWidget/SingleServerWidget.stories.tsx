import type { Meta, StoryObj } from '@storybook/react';

import { SingleServerWidget } from './SingleServerWidget';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Example/SingleServerWidget',
  component: SingleServerWidget,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {},
} satisfies Meta<typeof SingleServerWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary: Story = {
  args: {
    title: 'Registrations',
    data: [
      {
        percentages: 60,
        temperature: 35,
        ghz: 2.5,
      },
      {
        percentages: 40,
        temperature: 35,
        ghz: 2.5,
      },
      {
        percentages: 20,
        temperature: 35,
        ghz: 2.5,
      },
    ],
  },
};
