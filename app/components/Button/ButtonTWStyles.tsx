export const ButtonTWStyles = {
    base:'flex gap-1 items-center font-bold rounded transition-all ease-in-out duration-300 font-body',
    variants: {
        primary:'hover:bg-primary-700 bg-primary-800 text-white',
        secondary:'hover:bg-primary-700 hover:text-white bg-primary-300',
        ghost:'hover:text-white hover:border-primary-700 hover:bg-primary-700 hover:text-primary-700 border-primary-800 border-primary-800 border-2 text-primary-800'
    },
    sizes:{
        sm:'px-2 py-1 text-sm',
        md:'px-2 py-3 text-base',
        lg:'px-4 py-4 text-lg'
    }
}