import React from 'react'
import { useNavigate } from 'react-router-dom'
import { UserButton, useUser } from '@clerk/react'
import { useClerk } from '@clerk/react'
import { X } from 'lucide-react'

const SideBar = ({sideBar, setSideBar}) => {

    const navigate = useNavigate();
    const {user} = useUser();
    const { openSignIn } = useClerk();

    const navLinks = [
        {name: "BUY AIRTIME", path: "/buy-airtime"},
        {name: "BUY DATA", path: "/buy-data"},
        {name: "MY CONTACTS", path: "/my-contacts"},
        {name: "ABOUT US", path: "/"},
        {name: "CONTACT US", path: "/"}
    ]

  return (
    <div className={`${ sideBar? 'translate-x-0' :'-translate-x-full'} w-[60%] transition min-h-screen shadow-sm fixed lg:hidden top-0 left-0 bg-white z-50 flex flex-col py-10`}>
        <div className='flex w-full px-5 justify-between items-center mb-5'>
            <h1 className='text-2xl lg:text-4xl cursor-pointer font-bold' onClick={() => {navigate("/"); }}>Sub4Me</h1>
            <X className='cursor-pointer' onClick={() => {setSideBar(false)}}/>
        </div>
        <hr className='h-2 w-full' />

        <div className='w-full'>

            
                {navLinks.map((link, i) => {
                    return (
                        <div key={i} className ="flex flex-col w-full cursor-pointer">
                            <div className='flex items-center w-full h-12 hover:bg-black hover:text-white transition px-5 rounded-lg' onClick={() => {navigate(link.path); setSideBar(false)}}>
                                <p className='text-lg' onClick={() => {navigate(link.path); setSideBar(false)}}>{link.name}</p>
                            </div>
                                <hr className='h-1 w-full'/>
                            
                        </div>
                    )
                })}
                    
        </div>

        <div className='flex items-center px-5 w-full mt-auto'>
            {
                user 
                ? (<div className='flex w-full text-sm'>
                    <UserButton />
                    {user.firstName && <p className='ml-2 text-gray-700 text-sm'>{user.firstName}</p>}
                    {user.lastName && <p className='ml-1 text-gray-700 text-sm'>{user.lastName}</p>}
                </div>
                 )
                : <button onClick={openSignIn} className='cursor-pointer px-4 py-2 border border-black text-black hover:bg-black hover:text-white rounded-3xl self-end'>Login</button>
            }  
        </div>
    </div>
  ) 
}

export default SideBar