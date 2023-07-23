import type { Meta, StoryObj } from '@storybook/react';
import Button from './Calender';

const meta: Meta<typeof Button> = {
  title: 'Calender',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const asDefault: Story = {
    args: {
      title:"helleexo",
      textColour:"black",
      rounded:true,
    },
  };
  
export const fdgfdsdPrimary: Story = {
  args: {
    title:"hello",
    textColour:"black",
    rounded:true,
  },
};



export const asasasdSecondary: Story = {
  args: {
    title:"hello",
    textColour:"white",
    showSub:true,
    rounded:false
  },
};
