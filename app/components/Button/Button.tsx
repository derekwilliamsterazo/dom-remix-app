import React, { ReactHTML } from 'react';
import { Primary } from 'stories/examples/Button.stories';
import { ButtonTWStyles } from './ButtonTWStyles';



export interface ButtonProps {
    
    type?:'primary' | 'secondary' |  'ghost';
    size?: 'sm' | 'md' | 'lg';
    label: string;    
    onClick?: () => void; 

}

export const Button = ({
    
    size = 'md',
    type = 'primary',
    label,    
    ...props

}: ButtonProps) => {

    const setBaseStyles = ButtonTWStyles.base;

    const setStyleVariants = type === 'primary'   ? ButtonTWStyles.variants.primary
                           : type === 'secondary' ? ButtonTWStyles.variants.secondary
                           : type === 'ghost'     ? ButtonTWStyles.variants.ghost
                           : '';

    const setSize = size === 'sm' ? ButtonTWStyles.sizes.sm
                    : size === 'md' ? ButtonTWStyles.sizes.md
                    : size === 'lg' ? ButtonTWStyles.sizes.lg
                    : '';

   

    return(
        <button
        type="button"
        className={[setBaseStyles, setStyleVariants, setSize ].join(' ')}      
        {...props}
      >
       
        {label}
       
        
        
      </button>
    )

}