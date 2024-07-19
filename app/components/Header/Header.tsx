import React from 'react';
import { Button } from '../Button/Button';
type User = {
    name: string;
};

export interface HeaderProps {
    user?: User;
    onLogin?: () => void;
    onLogout?: () => void;
    onCreateAccount?: () => void;
}

export const Header = ({ user, onLogin, onLogout, onCreateAccount }: HeaderProps) => (
    <header className='bg-gray-100 dark:bg-gray-800 w-full flex justify-center'>
        <div className='wrapper py-2 px-12 flex max-w-7xl w-full items-center justify-between'>
            <div className='brand'>LOGO HERE</div>
            
            <div className='flex items-center gap-2'>
                {user ? (
                <>
                    <span className="welcome ">Welcome, <b>{user.name}</b>!</span>
                    <Button size='sm' onClick={onLogout} label="Log out" />
                </>
                ) : (
                <>
                    <Button size='sm' onClick={onLogin} label="Log in" />
                    <Button size='sm'  onClick={onCreateAccount} label="Sign up" />
                </>
                )}
            </div>

      </div>

    </header>
)