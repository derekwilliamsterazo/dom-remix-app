import React, { ReactHTML } from 'react';
import { ButtonProps } from '../Button/Button';
import { ButtonTWStyles } from '../Button/ButtonTWStyles';
import { PlusIcon } from '~/icons/PlusIcon';





export interface ButtonAddProps extends ButtonProps {   
    
    startContent: Boolean;
    endContent:Boolean;

}

export const ButtonAdd = ({
    
    size = 'md',
    type = 'primary',
    label,
    startContent=true,
    endContent,    
    ...props

}: ButtonAddProps) => {

    const setBaseStyles = ButtonTWStyles.base;

    const setStyleVariants = type === 'primary'   ? ButtonTWStyles.variants.primary
                          : type === 'secondary' ? ButtonTWStyles.variants.secondary
                          : type === 'ghost'     ? ButtonTWStyles.variants.ghost
                          : '';

    const setSize = size === 'sm' ? ButtonTWStyles.sizes.sm
                    : size === 'md' ? ButtonTWStyles.sizes.md
                    : size === 'lg' ? ButtonTWStyles.sizes.lg
                    : '';

    const setStartContent = !startContent ? 'hidden':'';
    const setEndContent = !endContent ? 'hidden':'';

    return(
        <button
        type="button"
        className={[setBaseStyles, setStyleVariants, setSize ].join(' ')}      
        {...props}
      >
        <div className={setStartContent}><PlusIcon/></div>
        {label}
        <div className={setEndContent}><PlusIcon/></div>
        
        
      </button>
    )

}