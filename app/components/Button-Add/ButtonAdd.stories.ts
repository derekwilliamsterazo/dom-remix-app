import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ButtonAdd } from './ButtonAdd';

import { PlusIcon } from '../../icons/PlusIcon'


const meta = {
    title: 'Component/ButtonAdd',
    component: ButtonAdd,
    parameters: {        
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof ButtonAdd>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ButtonLeftIcon: Story = {
    args: {
      
      label: 'Button with Icon',
      startContent:true,
      endContent:false
    },
};

export const ButtonRightIcon: Story = {
  args: {
    
    label: 'Button with Icon',
    startContent:false,
    endContent:true
  },
};