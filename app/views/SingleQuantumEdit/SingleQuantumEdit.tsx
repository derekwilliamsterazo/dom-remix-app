import React, { Children } from 'react';
import { Header } from '~/components/Header/Header';
import { Heading } from '~/components/Heading/Heading';
import { Main } from '~/components/Main/Main';
import { Footer } from '~/components/Footer/Footer';

import { SquareCheckedIcon } from '~/icons/SquareCheckedIcon';
import { SquareIcon } from '~/icons/SquareIcon';






export interface SingleQuantumEditProps {
   
}

export const SingleQuantumEdit = ({ }: SingleQuantumEditProps) => {

    interface StepProps  {
        isCompleted?:Boolean;
        isActive?:Boolean;
        children?:any
    }

    const Step = ({isCompleted, isActive, children}: StepProps) => {
       
        const showActive = isActive? 'bg-white text-primary-700':'bg-transparent';
        return (
            <div className={['flex rounded-lg p-2 gap-2 text-sm', showActive].join(' ')}>            
                {isCompleted ? <SquareCheckedIcon/> : <SquareIcon/>}         
                <span>{children}</span>
            </div>
        );
    };


    const ProgressNav = ({}) => { 
    

        return (       
          <div className=' flex gap-4 flex-col rounded-lg text-white bg-primary-700 w-full  px-4 py-6'>
            <h2 className='text-head4 font-bold'>Pending Steps to Publish</h2>
            
            <Step isActive isCompleted={true} children='Define'/>
            <Step children='Identify Sources'/>

            <div className="my-1  "><hr className=''/></div>
            
    
            <div className=" flex flex-col gap-4  text-sm ">
                <a className='' href="" aria-disabled>Overview</a>
                <a className='' href="" aria-disabled>Forum</a>
            </div>
    
           
          </div>
        )
    }





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
        slot2={Children}
        slot2Styles="bg-gray-200 w-4/5"
      
        />


        <Footer />
     </>

    )
}