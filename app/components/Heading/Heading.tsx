import React from 'react';
import { Button, ButtonProps } from '../Button/Button';

type Action = {
    label: string;
    onClick: () => void; 
};


export interface HeadingProps {
    title?:string;
    onPrimaryClick?: () => void;
    onSecondaryClick?: () => void;
    primaryLabel?:any;
    secondaryLabel?:any;
    created?:string
    updated?:string;
}

export const Heading = ({ title, onPrimaryClick, onSecondaryClick,primaryLabel, secondaryLabel, created,updated}: HeadingProps) => {
    return (
        <div className='bg-gray-200 dark:bg-gray-800 w-full flex justify-center'>
            <div className='wrapper py-2 px-12 flex max-w-7xl w-full items-center justify-between'>
                <h1 className='text-head2'>{title}</h1>
                
                <div className='flex items-center gap-2'>
                    {created || updated ? 
                    (
                    <>
                        <span className=" ">Created: {created}</span>
                        <span className=" ">Updated: {updated}</span>
                    </>
                    ) : ( <></>)}
                </div>

                <div className='flex items-center gap-2 flex-row-reverse'>
                    <Button size='sm' onClick={onPrimaryClick} label={primaryLabel} />
                    <Button size='sm' type='ghost' onClick={onSecondaryClick} label={secondaryLabel} />
                </div>

            </div>

        </div>

    )
}
    
