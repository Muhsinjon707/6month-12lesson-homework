import React from 'react'
import Button from '../components/Button'

function About() {
    return (
        <div className='container mx-auto w-2/3 flex flex-col gap-10 items-center justify-between p-6 my-16'>
            <h2 className='text-[#1d2837] font-bold leading-none flex items-center justify-center gap-5'>
                <span className='text-[68px]'>We Love</span>
                <Button>comfy</Button>
            </h2>
            <p className='text-xl w-11/12'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore quae quam blanditiis vitae, dolor non eveniet ipsum voluptatibus, quia optio aut! Perferendis ipsa cumque ipsam nostrum reprehenderit ad illo sed officiis ea tempore! Similique eos minima sit porro, ratione aspernatur!
            </p>
        </div>
    )
}

export default About