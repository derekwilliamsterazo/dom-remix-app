import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { SingleQuantumView } from './SingleQuantumView';


const meta = {
    title: 'Views/SingleQuantumView',
    component: SingleQuantumView,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof SingleQuantumView>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},    
};