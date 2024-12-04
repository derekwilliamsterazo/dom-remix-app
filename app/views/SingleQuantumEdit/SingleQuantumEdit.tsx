import React from 'react';
import { Header } from '~/components/Header/Header';
import { Heading } from '~/components/Heading/Heading';
import { Main } from '~/components/Main/Main';
import { Footer } from '~/components/Footer/Footer';
import { ProgressNav } from '~/components/ProgressNav/ProgressNav';

import { SquareCheckedIcon } from '~/icons/SquareCheckedIcon';
import { SquareIcon } from '~/icons/SquareIcon';






export interface SingleQuantumEditProps {
   
}

export const SingleQuantumEdit = ({ }: SingleQuantumEditProps) => {

    





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
        title="Untitled Quantum"
        />

        <Main
        
        slot1={<ProgressNav/>}
        slot1Styles="w-1/5"
        slot2="Form Goes Here"
        slot2Styles="bg-gray-200 w-4/5"
      
        />


        <Footer />
     </>

    )
}