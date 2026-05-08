import React, { useState } from 'react'
import { assets } from '../assets/assets'
import { Delete, DeleteIcon, Edit2, Globe, Phone, Trash } from 'lucide-react';
import AddContact from './AddContact';

export const Contact = ({contact}) => {

    const [contactInfo, setContactInfo] = useState(false);
    const [editInfo, setEditInfo] = useState(false)

    
 
  return (
    <div className='w-full flex flex-col'>
        <div onClick={() => {setContactInfo(!contactInfo); setEditInfo(false)}} className='z-30 bg-white w-full h-12 flex items-center cursor-pointer'>
            <p>{contact.firstName} {contact.lastName ? contact.lastName : ""}</p>
        </div>
        <hr className='w-full text-gray-300'/>
        
        <div className={`${contactInfo ? 'flex flex-col' : 'hidden'} justify-center items-center 
            transition w-full flex items-center bg-gray-200`}>
            <div className='flex justify-center items-center 
            transition w-full py-2 flex items-center bg-gray-200 gap-8'>
                <div onClick={() => {setEditInfo(true)}}  className='flex flex-col gap-1 justify-center items-center w-10 h-10 cursor-pointer  bg-blue-500 rounded-full'><Edit2 className='w-5 text-white' /></div>
            <div className='flex flex-col gap-1 justify-center items-center w-10 h-10 cursor-pointer  bg-red-500 rounded-full'><Trash className='w-5 text-white' /></div>
            </div>
            <hr className='w-full text-gray-300'/>
        </div>
        

        <div className={`${editInfo ? 'flex' : 'hidden'} py-5 justify-center items-center`} >
            <AddContact editInfo={editInfo} setEditInfo={setEditInfo}/>
        </div>
        
    </div>
  )
}

export default Contact;
