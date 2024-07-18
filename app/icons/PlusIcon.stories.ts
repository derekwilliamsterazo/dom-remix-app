import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { PlusIcon } from './PlusIcon'


const meta = {
    title: 'Icons/PlusIcon',
    component: PlusIcon,
    parameters: {        
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        size:{
            control: {
                type: 'inline-radio',
                options: [16, 24, 48]
            },
        }
    }
    
} satisfies Meta<typeof PlusIcon>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    
};

