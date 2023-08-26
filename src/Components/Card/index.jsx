import { useContext } from 'react'
import {ShoppingCartContext } from '../../Context'
import { PlusCircleIcon } from '@heroicons/react/24/solid'

const Card = (data) => {

    const context = useContext(ShoppingCartContext) // lee el estado global del proveedor

    return (
        <div className='bg-fuchsia-400 cursor-pointer w-[30vh] h-[36vh] mb-[3vh]'>
            <figure className='relative w-full h-4/5'>
                <span className='absolute bottom-0 left-0 px-[0.9vh] m-[1.2vh] bg-[#ffff]/80 rounded-lg text-black text-xs font-light'> {data.data.category.name} </span>
                <img className='w-full h-full object-cover rounded-t-lg' src={data.data.images} alt='{data.data.title}' />
                <div 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white/80 w-[3vh] h-[3vh] rounded-full m-[1.8vh] pb-[0.6vh] hover:bg-teal'
                    onClick={() => context.setCount(context.count + 1)}
                    >
                    <PlusCircleIcon className='h-[4.5vh]'></PlusCircleIcon>
                </div>
            </figure>
            <p className='flex justify-between bg-teal rounded-b-lg items-center text-white'>
                <span className='items-center text-sm font-light pl-[1.8vh] py-[0.9vh]'> {data.data.title} </span>
                <span className='text-lg font-medium pr-[1.8vh] p-[1.8vh]'> ${data.data.price} </span>
            </p>
        </div>
    )
}

export default Card