
import React from 'react';




export interface ColorBlockProps {
    
    label?: string;
    weight?: string;
    setColorClass?:string
   
}




export const ColorBlock = ({ label, weight, setColorClass }: ColorBlockProps) => {

  const setColor = `bg-${label}-${weight}`
    return (

        <>         
         <div className='flex items-center gap-4 w-full px-2 my-2 '>
            <div className='text-sm w-24  h-16  flex flex-col justify-center items-end ' >{label}-{weight}</div>
            <div className={[setColorClass, 'w-96 h-16 py-8 border-slate-200 border-solid border-x border-y '].join(' ')}></div>

         </div> 
        </>

    )

    
    
        
}