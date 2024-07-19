import React from 'react';



export interface MainProps {
    slot1?:any;
    slot2?:any;
    slot3?:any;
    slot1Styles?:string;
    slot2Styles?:string;
    slot3Styles?:string;

    
}

export const Main = ({slot1,slot2,slot3,slot1Styles,slot2Styles,slot3Styles }: MainProps) => {
    return (
        <main className=' text-xs font-sans  dark:bg-gray-900 w-full flex justify-center'>
            <div className='wrapper gap-12 py-8 px-12 flex max-w-7xl w-full items-start justify-between '>
                
                <div className={['', slot1Styles].join(' ')}>{slot1}</div>
                <div className={['', slot2Styles].join(' ')}>{slot2}</div>
                <div className={['', slot3Styles].join(' ')}>{slot3}</div>
            

            </div>

        </main>
    )
}