import React from 'react';
import { Meta, Story } from '@storybook/react';
import Button from '../src/components/Button';
import { Props } from '../src/components/Button/Button.types';

// https://storybook.js.org/docs/react/essentials/controls

const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    children: {
      control: {
        type: 'text',
      },
      description: 'only receive string',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: '' },
      },
    },
    primary: {
      control: 'boolean',
      description: 'Define the main colors of the button',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
  },
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = (args) => <Button {...args}>click me</Button>;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {
  primary: true,
};

// More on args: https://storybook.js.org/docs/react/writing-stories/args
