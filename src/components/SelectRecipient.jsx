import React, { useEffect, useState } from 'react'
import { assets } from '../assets/assets'
import MiniContact from './MiniContact';
import { networkPrefixes, networkLogos, myContact, networkProviders } from '../assets/assets';
import { Check, Gift, User } from 'lucide-react';

const SelectRecipient = ({ setRecipient, recipient, number, setNumber, network, setNetwork }) => {

    const [selectFromContacts, setSelectFromContacts] = React.useState(false);
    const [saveContact, setSaveContact] = useState(false);
    const [selectedContact, setSelectedContact] = useState('')
    const [selectNetworkManually, setSelectNetworkManually] = useState(false);
    const [isManualOverride, setIsManualOverride] = useState(false)

    const detectNetwork = (phone) => {
        if (phone.length < 4) return null;

        const prefix = phone.slice(0, 4);

        for (const network in networkPrefixes) {
            if (networkPrefixes[network].includes(prefix)) {
            return network;
            }
        }

        return "Unknown Network";
    };

    const handleNumberChange = (e) => {

        const value = e.target.value;
        setNumber(value);

        if (!isManualOverride && value.length >= 4) {
        const detected = detectNetwork(number);
        if (detected) {
           
                setNetwork(detected);
            
        } 
        }
        
        if (value.length < 4) {
            setIsManualOverride(false);
            setNetwork(null);
        }

    }

 

  return (
        <div className='flex flex-col gap-2 justify-center items-center'>
                    <div className='flex flex-col justify-center items-center flex-wrap gap-2'>
                        <p className='text-lg font-semibold lg:text-xl'>Who Is This For?</p>
                        <div className='flex gap-2 justify-center items-center'>
                            <div onClick={() => {setRecipient('myself'); setNumber(`${assets.myNumber}`); setSelectFromContacts(false); setNetwork(myContact.network)}} className={`lg:w-sm w-[140px] h-27 rounded-2xl border
                         border-black outline-0 cursor-pointer text-lg lg:text-xl  ${recipient === 'myself' ? 'bg-black text-white' : ""}
                         hover:bg-black hover:text-white transition flex flex-col lg:flex-row gap-2 items-center justify-center`}> <User className='pt-2'/> Myself <div className='text-sm'>({myContact.number})</div></div>
                            <div onClick={() => {setRecipient('other'); setNumber(''); setNetwork(null)}} className={`lg:w-sm w-[140px] h-27 border
                         border-black outline-0 rounded-2xl cursor-pointer hover:bg-black hover:text-white 
                         transition flex flex-col lg:flex-row gap-2 items-center justify-center ${recipient === 'other' ? 'bg-black text-white' : ""} text-lg lg:text-xl`}>
                            <Gift />
                            Someone Else
                            </div>
                        </div>
                    </div>
                    {recipient === 'other' && (<div className='flex w-sm items-center justify-center border rounded-2xl border-black lg:w-[48rem]'>
                             
                            <input onChange={(e) => {handleNumberChange(e)}} placeholder='08012345678' type="tel" className=' transition flex h-15 outline-0 text-lg lg:text-xl justify-center items-center w-full px-5' value={number}/>
                    </div>)}
                    <div className='flex w-full items-center justify-center pr-4'>
                            {network && (
                                 <div className="flex items-center">
                                    <img src={networkLogos.find((logo) => logo.name === network)?.logo || ''} alt={network} className="w-6 mr-2" />
                                    <p>{network} detected <span onClick={() => setSelectNetworkManually(true)} className='text-blue-900 cursor-pointer ml-3'>Select Manually</span></p>
                        
                                    
                                </div>
                    )}
                    {selectNetworkManually && (
                        <div className='flex w-sm fixed ml-[-80px] lg:ml-0 flex-col bg-white text-black rounded-lg shadow-lg py-2 min-h-25'>
                                <h1 className='text-gray-500 mb-2 ml-2'>CONTACTS</h1>
                                <hr className='w-full text-gray-300'/>
                                {networkProviders.map((netw, i) => 
                                        (
                                        <div className='flex flex-col w-full' key={i}>
                                            <div onClick={() => {setNetwork(netw); setSelectNetworkManually(false); setIsManualOverride(true)}} className='flex h-10 items-center w-full items-center justify-between cursor-pointer'>
                                                <p className='ml-2'>{netw}</p>
                                                {
                                                    network === netw && <Check className='w-5 mr-4' />
                                                }
                                            </div>
                                            <hr className='w-full text-gray-300'/>
                                        </div>
                                        )
                                )}
                            </div>
                    )}
                    </div>
                    
                    {recipient === 'other' && 
                    <div className='flex w-full items-center flex-col'>
                        <div className='flex w-full justify-between items-center'>
                            <div className='flex gap-2 items-center'>
                                <label className='relative cursor-pointer'>
                                    <input type="checkbox" onChange={(e) => setSaveContact(e.target.checked)}
                                    checked={saveContact} className='sr-only peer'/>
                                    <div className='w-9 h-5 bg-slate-300 rounded-full
                                    peer-checked:bg-black transition'></div>
                                    <span className='absolute left-1 top-1 w-3 h-3 bg-white rounded-full
                                    transition peer-checked:translate-x-4'></span>
                                </label>
                                <p>Save to Contacts</p>
                            </div>
                            <p className='text-blue-900 cursor-pointer' onClick={() => setSelectFromContacts(!selectFromContacts)}>Select from contacts</p>
                        </div>
                        {selectFromContacts && <div>
                            <MiniContact network={network} setNetwork={setNetwork} detectNetwork={detectNetwork} number={number} setNumber={setNumber} selectFromContacts={selectFromContacts} setSelectFromContacts={setSelectFromContacts} selectedContact={selectedContact} setSelectedContact={setSelectedContact}/>
                        </div>}
                    </div>
                    }
                        
                    
                </div>
  )
}

export default SelectRecipient