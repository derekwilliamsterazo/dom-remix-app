import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Footer } from './Footer';




const meta = {
    title: 'Component/Footer',
    component: Footer,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    
} satisfies Meta<typeof Footer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};


