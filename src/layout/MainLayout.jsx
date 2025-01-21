import React from 'react'
import Header from '../components/Header'

function MainLayout({ children }) {
    return (
        <div className='w-full flex flex-col items-center justify-center'>
            <div className='w-full bg-blue-100'>
                <Header />
            </div>

            <main>
                {children}
            </main>
        </div>
    )
}

export default MainLayout