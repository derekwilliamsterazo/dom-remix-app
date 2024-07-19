import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Heading } from './Heading';




const meta = {
    title: 'Component/Heading',
    component: Heading,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { 
        onPrimaryClick: fn(), onSecondaryClick: fn()
    },
} satisfies Meta<typeof Heading>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {      
      title:'This is the Heading Title',
      primaryLabel:'Primary Action',
      secondaryLabel:'Secondary Action'
    },
};



