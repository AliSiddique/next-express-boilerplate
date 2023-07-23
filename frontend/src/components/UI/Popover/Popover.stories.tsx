import type { Meta, StoryObj } from '@storybook/react';
import Button from './Popover';

const meta: Meta<typeof Button> = {
  title: 'Popover',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const hdgdhgdhgDefault: Story = {
    args: {
      title:"helbbfdfddffdblo",
      textColour:"black",
      rounded:true,
    },
  };
  
export const okoopPrimary: Story = {
  args: {
    title:"hello",
    textColour:"black",
    rounded:true,
  },
};



export const nioinnioSecondary: Story = {
  args: {
    title:"hello",
    textColour:"white",
    showSub:true,
    rounded:false
  },
};
