import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Landing } from './Landing';


const meta = {
    title: 'Views/Landing',
    component: Landing,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { onClick: fn() },
} satisfies Meta<typeof Landing>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {},    
};