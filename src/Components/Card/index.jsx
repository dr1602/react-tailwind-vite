const Card = () => {
    return (
        <div className='bg-fuchsia-400 cursor-pointer w-[30vh] h-[36vh] rounded-lg border-solid'>
            <figure className='relative mb-[3vh] w-full h-4/5'>
            <span className='absolute bottom-0 left-0 p-[0.9vh] m-[1.8vh] bg-white/80 rounded-lg text-black text-xs font-light'> Electronics </span>
                <img className='w-full h-full object-cover rounded-lg' src='https://images.pexels.com/photos/8001055/pexels-photo-8001055.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt='headphones' />
                <div className='absolute top-0 right-0 flex justify-center items-center bg-white w-[3vh] h-[3vh] rounded-full m-[1.8vh] pb-[0.6vh]'>
                    +
                </div>
            </figure>
            <p className='flex justify-between items-center text-white'>
                <span className='text-sm font-light pl-[1.8vh] pb-[1.8vh]'>Headphones</span>
                <span className='text-lg font-medium pr-[1.8vh] pb-[1.8vh]'>$300</span>
            </p>
        </div>
    )
}

export default Card