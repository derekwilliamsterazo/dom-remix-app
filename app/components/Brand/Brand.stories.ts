import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Brand } from './Brand';


const meta = {
  title: 'Component/Brand',
  component: Brand,
  tags: ['autodocs'],
  parameters: {   
    layout: 'fullscreen',
  },
  argTypes: {
    hasBg:Boolean
  },
  args: { },
} satisfies Meta<typeof Brand>;

export default meta;
type Story = StoryObj<typeof meta>;


export const Default: Story = {
  args: {
    hasBg:false
  }
};

export const BrandWithBG: Story = {
    args: {
      hasBg:true
    }
};

