import React from 'react';
import { Header } from '~/components/Header/Header';
import { Heading } from '~/components/Heading/Heading';
import { Main } from '~/components/Main/Main';
import { Footer } from '~/components/Footer/Footer';



export interface LandingProps {
  
}

export const Landing = ({ }: LandingProps) => {
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
        slot2="Slot 2"
        slot2Styles="bg-gray-200 w-3/5 h-full"
        slot3="Slot 3"
        slot3Styles="bg-gray-200 w-1/5 h-full"
        />


        <Footer />
     </>

    )
}