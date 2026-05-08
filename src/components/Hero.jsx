import React from 'react'
import { assets } from '../assets/assets.js'
import { NavLink } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { ArrowBigRight, Contact, Globe, Phone } from 'lucide-react'
import { useClerk } from '@clerk/react'
import { useUser } from '@clerk/react';

const Hero = () => {

    const navigate = useNavigate()
    const { user } = useUser();

    const { openSignIn } = useClerk();

  return (
    <div className='bg-white bg-cover bg-center h-screen'>
        <div className='flex items-center justify-center h-screen'>
        <div className='flex flex-col items-center gap-5'>
            <h1 className='text-4xl lg:text-6xl font-bold'>Sub4Me</h1>
            <p className='text-xl lg:text-2xl'>Buy data & airtime in seconds...</p>
            <div className='flex gap-5 lg:gap-9 flex-wrap justify-center md:max-w-3xl'>

                {
                    user 
                    ?(
                        <div className='flex gap-5 lg:gap-9 flex-wrap justify-center md:max-w-3xl'>
                            <button onClick={() => {navigate('/buy-airtime')}} className='bg-black flex gap-3 items-center justify-center text-white 
                transition text-xl px-6 py-3 w-[240px] 
                rounded-lg cursor-pointer border border-white hover:scale-102 active:scale-95'><Phone className='w-5' />Buy Airtime</button>

                <button onClick={() => {navigate('/buy-data')}} className='bg-white flex gap-3 items-center justify-center text-black 
                transition text-xl px-6 py-3 w-[240px] 
                rounded-lg cursor-pointer border border-black hover:scale-102 active:scale-95'><Globe className='w-5' />Buy Data</button>

                <button onClick={() => {navigate('/my-contacts')}} className='bg-black flex gap-3 items-center justify-center text-white 
                transition text-xl px-6 py-3 w-[240px] 
                rounded-lg cursor-pointer border border-white hover:scale-102 active:scale-95'><Contact className='w-5' />My Contacts</button>
                        </div>
                    )
                    : (
                        <button onClick={() => {openSignIn()}} className='bg-black flex gap-3 items-center justify-center text-white 
                transition text-xl px-6 py-3 w-[240px] 
                rounded-lg cursor-pointer border border-white hover:scale-102 active:scale-95'>Get Started<ArrowBigRight className='w-5' /></button>
                    )
                }
                
                


            </div>
        </div>
    </div>
    </div>
  )
}

export default Hero