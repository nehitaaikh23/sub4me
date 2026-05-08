import React, { useState } from 'react'
import  { useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/react'
import { useClerk } from '@clerk/react'
import { Menu, X } from 'lucide-react'
import SideBar from './SideBar.jsx'

const Navbar = () => {


    const navigate = useNavigate();
    const {user} = useUser();
    const { openSignIn } = useClerk();

    const [navbar, setNavbar] = useState(false);

    const [sideBar, setSideBar] = useState(false);

  return (
    <nav className='flex h-10 fixed top-0 items-center justify-between w-full px-8 py-8 lg:px-24 backdrop-blur-sm shadow-sm z-50'>
        <div  className='flex h-5 items-center justify-between w-full'>
            <div>
            <h1 className='text-2xl lg:text-4xl cursor-pointer font-bold' onClick={() => {navigate("/"); console.log("Logo clicked")}}>Sub4Me</h1>
            
        </div>

        
        <div className='flex gap-8 items-center text-xl hidden sm:flex'>
            <p className='font-semibold text-gray-700 cursor-pointer px-2 py-2 rounded-2xl border border-white hover:border-gray-500 transition' onClick={() => {navigate('/buy-airtime')}}>Airtime</p>
            <p className='font-semibold text-gray-700 cursor-pointer px-2 py-2 rounded-2xl border border-white hover:border-gray-500 transition' onClick={() => {navigate('/buy-data')}}>Data</p>
            <p className='font-semibold text-gray-700 cursor-pointer px-2 py-2 rounded-2xl border border-white hover:border-gray-500 transition' onClick={() => {navigate('/my-contacts')}}>My Contacts</p>
            <p className='font-semibold text-gray-700 cursor-pointer px-2 py-2 rounded-2xl border border-white hover:border-gray-500 transition' onClick={() => {navigate('/')}}>About Us</p>
            <p className='font-semibold text-gray-700 cursor-pointer px-2 py-2 rounded-2xl border border-white hover:border-gray-500 transition' onClick={() => {navigate('/')}}>Contact</p>
            {
                user 
                ? <UserButton /> 
                : <button onClick={openSignIn} className='cursor-pointer px-4 py-2 border border-black text-black hover:bg-black hover:text-white rounded-3xl'>Login</button>
            }          
        </div>
        <Menu className='cursor-pointer sm:hidden' onClick={() => setSideBar(true)}/>
        </div>
        
        <SideBar sideBar={sideBar} setSideBar={setSideBar}/>
        
    </nav>
  )
}

export default Navbar