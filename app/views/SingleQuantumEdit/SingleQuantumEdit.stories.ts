import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SingleQuantumEdit } from './SingleQuantumEdit';


const meta = {
    title: 'Views/SingleQuantumEdit',
    component: SingleQuantumEdit,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof SingleQuantumEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},    
};