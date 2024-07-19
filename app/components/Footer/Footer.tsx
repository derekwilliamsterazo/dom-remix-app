import React from 'react';



export interface FooterProps {}

export const Footer = ({ }: FooterProps) => {
    return (
        <footer className=' text-xs font-sans bg-gray-100 dark:bg-gray-800 w-full flex justify-center'>
            <div className='wrapper gap-12 py-8 px-12 flex max-w-7xl w-full items-center justify-between'>
                <div className='brand w-1/5'>LOGO HERE</div>
                
                <div className='w-4/5'>
                    <p>© 2025 Dominion. All Rights Reserved.</p>
                    <p className=''>
                        This application and its content are the property of Dominion and are protected by applicable copyright laws. Unauthorized distribution, reproduction, or use of this application or its content in any form is strictly prohibited.The information and data contained within this application are intended for internal use only by authorized employees of Dominion. Any unauthorized use, disclosure, or modification of this information is strictly prohibited and may result in legal action. All trademarks and logos used within this application are the property of their respective owners and are used with permission. By accessing and using this application, you agree to abide by the copyright and intellectual property laws of Dominion and any applicable laws. Dominion reserves the right to take legal action against any individual or entity found to be in violation of these laws
                        
                    </p>
                </div>

        </div>

        </footer>
    )
}