import React, { useEffect, useState } from 'react'
import { myDummyContacts } from '../assets/assets';
import Contact from './Contact';
import { data } from 'react-router-dom';

const ContactList = () => {


  return (
    <div className='flex w-full flex-col'>
        <h1 className='text-gray-500 mb-2'>CONTACTS</h1>
        <hr className='w-full text-gray-300'/>

        {myDummyContacts.length === 0 ?
            <div className='flex flex-col gap-3 items-center justify-center mt-10'>
                <h1 className='text-gray-500 text-lg'>No contacts yet</h1>
                <p className='text-gray-400 text-sm'>Add contacts to see them here</p>
            </div>
        :

        myDummyContacts.map((contact, index) => {
            return <Contact contact={contact} key={index}/>
        })}
        
        <div className='flex w-full justify-center items-end my-7'>
          <p className='text-gray-500'>{myDummyContacts.length} contacts</p>
        </div>
        
    </div>
  )
}

export default ContactList