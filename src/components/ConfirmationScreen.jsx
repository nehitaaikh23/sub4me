import React from 'react'
import { X } from 'lucide-react'

const ConfirmationScreen = ({confirmationScreen, plan, setConfirmationScreen, amount, number, purchaseType, recipient, network, planName}) => {

    const getName = (recipient, num) => {
        if (recipient === 'myself'){
            return 'yourself'
        } else {
            return number;
        }
    }

    const price = `₦${amount}`

  return confirmationScreen ?  ( 
    <div className='min-h-screen fixed flex items-center justify-center w-full px-8 lg:px-24 z-50 backdrop-blur-sm'>
        <div className='w-[90%] md:w-[320px] py-10 bg-white rounded-2xl flex flex-col items-center justify-center gap-5 shadow-lg text-center px-5'>
            <X onClick={() => {setConfirmationScreen(false)}} className='self-end text-slate-500 cursor-pointer' />
            <h1 className='text-3xl font-bold mb-10'>Confirm Purchase</h1>
            <p className='text-[1rem] lg:text-lg'>{`You are about to purchase ${plan ? planName : price } ${purchaseType} for ${getName(recipient,number)}. Are you sure you want to proceed?`}</p>
            <div className='mt-7 flex items-center gap-5'>
                <button className='bg-black text-white w-16 h-13 lg:text-lg rounded-lg cursor-pointer hover:scale-102 active:scale-95'>Yes</button>
                <button className='bg-white text-black border border-black w-16 h-13 lg:text-lg rounded-lg cursor-pointer hover:scale-102 active:scale-95' onClick={() => {setConfirmationScreen(false)}}>No</button>
            </div>
        </div>
    </div>
  ) : null
}

export default ConfirmationScreen