import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ColorBlock } from './ColorBlock'



const meta = {
    title: 'Utils/ColorBlock',
    component: ColorBlock,
    parameters: {        
        layout: 'centered',
    },
    tags: ['autodocs'],
    
} satisfies Meta<typeof ColorBlock>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary900: Story = {
    args: {
        label:'primary',
        weight:'900'
    }   
};

export const Primary300: Story = {
    args: {
        label:'primary',
        weight:'300'
    }   
};