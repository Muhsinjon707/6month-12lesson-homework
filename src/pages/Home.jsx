import React from 'react'
import Button from '../components/Button'

import firstImg from "../assets/firstImg.webp"
import secondImg from "../assets/secondImg.webp"

import avantGarde from "../assets/cards/avantGarde.webp"
import coffeeTable from "../assets/cards/coffeeTable.jpeg"
import comfyBed from "../assets/cards/comfyBed.jpeg"

function Home() {
    return (
        <div className='container mx-auto w-full flex flex-col gap-20 items-center justify-between p-6 my-16'>
            <div className='w-full flex items-center justify-between'>
                <div className='flex flex-col items-start justify-between gap-8'>
                    <h1 className='text-[#1d2837] text-[68px] font-bold leading-none w-9/12'>We are changing the way people shop</h1>
                    <p className='w-9/12'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Tempore repellat explicabo enim soluta temporibus asperiores aut obcaecati perferendis porro nobis.
                    </p>
                    <Button>our products</Button>
                </div>
                <div className='bg-[#1d2837] w-[800px] h-[500px] rounded-xl flex p-5  overflow-x-auto gap-5 '>
                    <div className='w-[800px] h-full'>
                        <img className='w-full h-full object-cover rounded-xl' src={firstImg} alt="" />
                    </div>
                    <div className='w-[800px] h-full'>
                        <img className='w-full h-full object-cover rounded-xl' src={secondImg} alt="" />
                    </div>
                </div>
            </div>
            <div className='w-full flex flex-col items-start justify-center gap-10'>
                <div className='w-full flex flex-col items-start gap-5'>
                    <h2 className='text-[38px] font-bold'>Featured Products</h2>
                    <hr className='w-full bg-slate-300' />
                </div>
                <div className='w-full flex flex-wrap items-center justify-center content-center gap-5'>
                    <div className='rounded-lg shadow-md shadow-slate-300 transition-shadow duration-300 ease-linear hover:shadow-slate-400 w-[32%] flex flex-col items-center justify-center p-5 gap-10'>
                        <img className='rounded-lg w-full h-[250px] object-cover' src={avantGarde} alt="Avant-Garde Lamp" />
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <h3 className='text-[#1d2837] font-bold text-xl'>Avant-Garde Lamp</h3>
                            <span className='text-[#463aa1]'>$179.99</span>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-md shadow-slate-300 transition-shadow duration-300 ease-linear hover:shadow-slate-400 w-[32%] flex flex-col items-center justify-center p-5 gap-10'>
                        <img className='rounded-lg w-full h-[250px] object-cover' src={coffeeTable} alt="Avant-Garde Lamp" />
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <h3 className='text-[#1d2837] font-bold text-xl'>Coffe Table</h3>
                            <span className='text-[#463aa1]'>$179.99</span>
                        </div>
                    </div>
                    <div className='rounded-lg shadow-md shadow-slate-300 transition-shadow duration-300 ease-linear hover:shadow-slate-400 w-[32%] flex flex-col items-center justify-center p-5 gap-10'>
                        <img className='rounded-lg w-full h-[250px] object-cover' src={comfyBed} alt="Avant-Garde Lamp" />
                        <div className='flex flex-col items-center justify-center gap-4'>
                            <h3 className='text-[#1d2837] font-bold text-xl'>Comfy Bed</h3>
                            <span className='text-[#463aa1]'>$129.99</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home