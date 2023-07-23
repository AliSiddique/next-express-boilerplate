import type { Meta, StoryObj } from '@storybook/react';
import Button from './Badge';

const meta: Meta<typeof Button> = {
  title: 'Badge',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const BadgeDefaultDefault: Story = {
    args: {
      title:"d",
      textColour:"white",
      rounded:true,
    },
  };
  
export const BadgePrimary: Story = {
  args: {
    title:"hello",
    textColour:"black",
    rounded:true,
  },
};



export const BadgeSecondary: Story = {
  args: {
    title:"hello",
    textColour:"white",
    showSub:true,
    rounded:false
  },
};
