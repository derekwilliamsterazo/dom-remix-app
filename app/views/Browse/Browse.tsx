import React from 'react';
import { Header } from '~/components/Header/Header';
import { Heading } from '~/components/Heading/Heading';
import { Main } from '~/components/Main/Main';
import { Footer } from '~/components/Footer/Footer';
import { Table } from '~/components/Table/Table';

type Action = {
    label: string;
    onClick: () => void; 
};


export interface BrowseProps {
  
}

export const Browse = ({ }: BrowseProps) => {
    return (
        <>
       
            <Header
                onCreateAccount={() => {}}
                onLogin={() => {}}
                onLogout={() => {}}
                user={{
                    name: 'Donnie Minion'
                }}
            />

            <Heading
            onPrimaryClick={() => {}}
            onSecondaryClick={() => {}}
            primaryLabel="Primary Action"
            secondaryLabel="Secondary Action"
            title="This is the Heading Title"
            />

            <Main
            slot1="Slot 1"
            slot1Styles="bg-gray-200 w-1/5 h-full"
            slot2={<Table />}
            slot2Styles="bg-gray-200 w-4/5 h-full"
         
            />


            <Footer />
         </>

    )
}
    
