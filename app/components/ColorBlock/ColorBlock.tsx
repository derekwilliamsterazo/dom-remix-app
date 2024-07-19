
import React from 'react';




export interface ColorBlockProps {
    
    label?: string;
    weight?: string;
   
}




export const ColorBlock = ({ label, weight }: ColorBlockProps) => {

  const setColor = `bg-${label}-${weight}`
    return (

        <>         
         <div className='flex items-center gap-8 w-full px-8 '>
            <div className='text-sm'>{label}-{weight}</div>
            <div className={[setColor, 'w-full h-10 py-8 '].join(' ')}>sddsdds</div>

         </div> 
        </>

    )

    
    
        
}