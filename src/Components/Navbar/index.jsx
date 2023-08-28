import { useContext } from 'react'
import { NavLink, useActionData } from 'react-router-dom'
import { ShoppingCartIcon } from '@heroicons/react/24/solid'
import { ShoppingCartContext } from '../../Context'

const Navbar = () => {

    const context = useContext(ShoppingCartContext)
    const activeStyle = 'underline underline-offset-[0.9vh]'

    return (
        <nav className='flex justify-between bg-teal items-center fixed z-10 top-0 w-full h-[9vh] px-[6vh] text-sm font-light'>
            <ul className='flex items-center gap-[3vh] text-white'>
                <li className='font-semibold text-lg'>
                    <NavLink to='/'
                    >
                        PokeStore
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            All
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/clothes'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Clothes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/electronics'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Electronics
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/furnitures'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Furnitures
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/toys'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Toys
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/others'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Others
                    </NavLink>
                </li>
            </ul>

            <ul className='flex items-center gap-[3vh] text-white'>
                <li className='text-white/60'>
                    dev@adabyron.tech
                </li>
                <li>
                    <NavLink
                        to='/my-orders'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            My Orders
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/my-account'
                        className={({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            My Account
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to='/sign-in'
                        className={ ({ isActive }) =>
                        isActive ? activeStyle : undefined
                        }
                        >
                            Sign In
                    </NavLink>
                </li>
                <li className='flex'>
                    <ShoppingCartIcon className='pr-[0.9vh] h-[3vh]'/> {context.count}
                </li>
            </ul>
        </nav>
    )
}

export default Navbar