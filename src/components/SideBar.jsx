import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/react'
import { useClerk } from '@clerk/react'
import { X } from 'lucide-react'

const SideBar = ({sideBar, setSideBar}) => {

    const navigate = useNavigate();
    const {user} = useUser();
    const { openSignIn } = useClerk();

  return (
    <div className={`${ sideBar? 'translate-x-0' :'-translate-x-full'} w-[50%] transition min-h-screen shadow-sm fixed lg:hidden top-0 left-0 bg-white z-50 flex flex-col items-center px-8 py-10`}>
        <div className='flex w-full justify-between items-center mb-10'>
            <h1 className='text-2xl lg:text-4xl cursor-pointer font-bold' onClick={() => {navigate("/"); console.log("Logo clicked")}}>Sub4Me</h1>
            <X className='cursor-pointer' onClick={() => {setSideBar(false)}}/>
        </div>
        <hr className='h-2 w-full' />

        <div className='flex gap-10 items-center w-full text-xl flex-col mt-10'>
            <p onClick={() => {navigate('/buy-airtime'); setSideBar(false)}}>Buy Airtime</p>
            <hr className='h-2 w-full cursor-pointer'/>
            <p onClick={() => {navigate('/buy-data'); setSideBar(false)}}>Buy Data</p>
            <hr className='h-2 w-full cursor-pointer' />
            <p onClick={() => {navigate('/my-contacts'); setSideBar(false)}}>My Contacts</p>
            <hr className='h-2 w-full cursor-pointer' />
            <p onClick={() => {navigate('/'); setSideBar(false)}}>About Us</p>
            <hr className='h-2 w-full cursor-pointer' />
            <p onClick={() => {navigate('/'); setSideBar(false)}}>Contact Us</p>
            <hr className='h-2 w-full cursor-pointer' />        
        </div>

        <div className='flex items-center w-full mt-auto'>
            {
                user 
                ? (<div className='flex w-full'>
                    <UserButton />
                    
                </div>
                 )
                : <button onClick={openSignIn} className='cursor-pointer px-4 py-2 border border-black text-black hover:bg-black hover:text-white rounded-3xl self-end'>Login</button>
            }  
        </div>
    </div>
  ) 
}

export default SideBar