import React from 'react'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <>
            <header className='container mx-auto w-full flex items-center justify-between p-6'>
                <div className='bg-blue-500 py-2 px-4 rounded-md text-white'>C</div>
                <div>
                    <ul className='flex items-center justify-between gap-10'>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg'>
                            <Link to='/'>Home</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg'>
                            <Link className='' to='/about'>About</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg'>
                            <Link className='' to='/products'>Products</Link>
                        </li>
                        <li className='active:bg-slate-900 active:py-2 active:px-3 active:text-white active:rounded-lg'>
                            <Link className='' to='/cart'>Cart</Link>
                        </li>
                    </ul>
                </div>
                <div className='flex items-center gap-5'>
                    <div>Moon Icon</div>
                    <div className='hover:bg-[#dee5f0] hover:rounded-1/2 p-3'>Корзинка</div>
                </div>
            </header>
        </>
    )
}

export default Header