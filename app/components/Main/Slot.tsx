import React from 'react';



export interface SlotProps {
    // bg?:string;
}


export const Slot = () => {
    return (
        <div className={['w-full h-full'].join(' ')}>
           <h2>This is a sample slot</h2>
           <p>In React, slots are implemented using the children prop, a special prop that allows passing elements directly into the output of a component. By leveraging the children prop, React developers can create slot components that accept nested elements or other components, making them highly flexible and reusable.</p>

        </div>
    )
}