import React, { useState } from 'react'
import { myDummyContacts } from '../assets/assets'
import { Check } from 'lucide-react'

const MiniContact = ({selectFromContacts, setSelectFromContacts, selectedContact, setSelectedContact, number, setNumber, detectNetwork, network, setNetwork}) => {

    

  return (
    <div className='flex w-3xs sticky right-7 flex-col bg-white text-black rounded-lg shadow-lg py-2 min-h-25'>
        <h1 className='text-gray-500 mb-2 ml-2'>CONTACTS</h1>
        <hr className='w-full text-gray-300'/>
        {myDummyContacts.map((contact, i) => 
                (
                <div className='flex flex-col w-full' key={i}>
                    <div onClick={() => {setSelectedContact(contact.id); setSelectFromContacts(false); setNumber(contact.number); setNetwork(contact.network) }} className='flex h-10 items-center w-full items-center justify-between cursor-pointer'>
                        <p className='ml-2'>{contact.firstName} {contact.lastName && contact.lastName}</p>
                        {selectedContact === contact.id && <Check className='w-5 mr-4'/>}
                    </div>
                    <hr className='w-full text-gray-300'/>
                </div>
                )
        )}
    </div>
  )
}

export default MiniContact