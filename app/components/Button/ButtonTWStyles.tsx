export const ButtonTWStyles = {
    base:'flex gap-1 items-center font-bold rounded transition-all ease-in-out duration-300 font-body',
    variants: {
        primary:[
            'bg-primary-800',
            'text-white',

            'hover:bg-primary-700',
            
            'dark:bg-primary-300',
            'dark:text-primary-800',

            'dark:hover:text-gray-200',
            
            
        ].join(' '),
        secondary:'hover:bg-primary-700 hover:text-white bg-primary-300 ',
        ghost:[
            'hover:text-white',
            'hover:border-primary-700',
            'hover:bg-primary-700',
            'hover:text-primary-700',
            
            'border-primary-700',            
            'border-2',

            
            'dark:border-gray-200',
            'dark:text-gray-200',           
            
            'text-primary-700'
        ].join(' ')
    },
    sizes:{
        sm:'px-2 py-1 text-sm',
        md:'px-2 py-3 text-base',
        lg:'px-4 py-4 text-lg'
    }
}