import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Table } from './Table';




const meta = {
    title: 'Component/Table',
    component: Table,
    parameters: {        
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
   
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
   
};



