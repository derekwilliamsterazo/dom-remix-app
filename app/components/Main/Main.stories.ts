import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Main } from './Main';
import { Slot } from './Slot';




const meta = {
    title: 'Component/Main',
    component: Main,
    subcomponents:{Slot},
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
   
} satisfies Meta<typeof Main>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ThreeColumns: Story = {
    args: {
        slot1: 'Slot 1',
        slot1Styles:'bg-gray-200 w-1/5 h-full',

        slot2: 'Slot 2',
        slot2Styles:'bg-gray-200 w-3/5 h-full' ,

        slot3: 'Slot 3',
        slot3Styles:'bg-gray-200 w-1/5 h-full',
    } 
   
};

export const TwoColumns: Story = {
    args: {
        slot1: 'Slot 1',
        slot1Styles:'bg-gray-200 w-2/5 h-full',

        slot2: 'Slot 2',
        slot2Styles:'bg-gray-200 w-3/5 h-full' ,

        
    } 
   
};



