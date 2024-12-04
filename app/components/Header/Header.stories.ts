import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { Header } from './Header';




const meta = {
    title: 'Component/Header',
    component: Header,
    parameters: {        
        layout: 'none',
    },
    tags: ['autodocs'],
    argTypes:{
        // endContent: {control:}
    },
    args: { 
         onLogin: fn(), onLogout: fn(), onCreateAccount: fn()
    },
} satisfies Meta<typeof Header>;

export default meta;
type Story = StoryObj<typeof meta>;

export const LoggedIn: Story = {
    args: {
      
      user: {
        name: 'Donnie Minion'
      }
    },
};

export const LoggedOut: Story = {
    args: {
      
      
    },
};

