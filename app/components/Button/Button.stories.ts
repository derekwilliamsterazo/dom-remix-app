import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Button } from './Button';

import { PlusIcon } from '../../icons/PlusIcon'
import "../../tailwind.css";

const meta = {
    title: 'Component/Button',
    component: Button,
    parameters: {        
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
      
      label: 'Primary Button',
      type:'primary'
    },
  };

  export const PrimaryWithIconRight: Story = {
    args: {
      
      label:'Primary Button',
      type:'primary'
      
    },
  };