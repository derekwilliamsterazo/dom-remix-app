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
    <header>
        <div className='brand'>LOGO HERE</div>
        <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button  onClick={onLogin} label="Log in" />
            <Button  onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>

    </header>
)