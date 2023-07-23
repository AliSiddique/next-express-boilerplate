import type { Meta, StoryObj } from '@storybook/react';
import Button from './Carousel';

const meta: Meta<typeof Button> = {
  title: 'Carousel',
  component: Button,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
  tags: ['autodocs'],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    
  },
};

export default meta;
type Story = StoryObj<typeof Button>;
export const oijoijioDefault: Story = {
    args: {
      title:"helwwerrwewererlo",
      textColour:"black",
      rounded:true,
    },
  };
  
export const iojioPrimary: Story = {
  args: {
    title:"hello",
    textColour:"black",
    rounded:true,
  },
};



export const iubiuiuSecondary: Story = {
  args: {
    title:"hello",
    textColour:"white",
    showSub:true,
    rounded:false
  },
};
