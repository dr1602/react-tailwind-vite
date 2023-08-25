import { XCircleIcon } from '@heroicons/react/24/solid'

const ProductDetail = () => {
    return(
        <aside className='w-[63vh] h-[90vh] bg-white flex flex-col fixed top-[9.3vh] right-[0.3vh] border border-black rounded-lg '>
            <div className='flex justify-between items-center p-[1.5vh]'>

                <h2 className='font-medium text-xl '> Detail </h2>
                <XCircleIcon className='h-[4.5vh]'/>

            </div>
        </aside>
    )
}

export default ProductDetail

