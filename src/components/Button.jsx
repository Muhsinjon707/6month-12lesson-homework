import React from 'react'

function Button({children}) {
  return (
    <>
        <button className='p-3 text-white bg-blue-500 transition-bg duration-300 rounded-md hover:bg-blue-600 uppercase'>{children}</button>
    </>
  )
}

export default Button