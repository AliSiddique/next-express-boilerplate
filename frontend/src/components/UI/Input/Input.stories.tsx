import type { Meta, StoryObj } from '@storybook/react';
import Button from './Input';

const meta: Meta<typeof Button> = {
  title: 'Input',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const dgfgdgfdgfDefault: Story = {
    args: {
      title:"hdfdfdfgello",
      textColour:"black",
      rounded:true,
    },
  };
  
export const iereijrojPrimary: Story = {
  args: {
    title:"hello",
    textColour:"black",
    rounded:true,
  },
};



export const iojioiomSecondary: Story = {
  args: {
    title:"hello",
    textColour:"white",
    showSub:true,
    rounded:false
  },
};
