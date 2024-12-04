import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Browse } from './Browse';


const meta = {
    title: 'Views/Browse',
    component: Browse,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Browse>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},    
};