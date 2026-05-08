import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import toast from 'react-hot-toast'
import ConfirmationScreen from '../components/ConfirmationScreen'
import SelectRecipient from '../components/SelectRecipient'
import { useUser, SignIn } from '@clerk/react'

const BuyAirtime = () => {

    const {user} = useUser();


    const [number, setNumber] = React.useState('')
    const [amount, setAmount] = React.useState('')
    const [recipient, setRecipient] = React.useState('')
    const [customAmount, setCustomAmount] = React.useState(false);
    const [confirmationScreen, setConfirmationScreen] = React.useState(false)
    const [network, setNetwork] = useState(null)
    const purchaseType = 'airtime'

    const fetchUserNumber = async () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const otherNumber = number.trim();
        if (!recipient){
            toast.error("Please select a recipient")
        }
        if (!amount || Number(amount) < 100){
            toast.error("Please select an amount above ₦100")
        }
        if (recipient === 'other' && otherNumber.length !== 11){
            toast.error("Please enter a valid phone number")
        }
        if (!network || network === "Unknown Network"){
            toast.error("Please enter a valid number or Pick Network")
        }
        if (recipient === 'myself' && Number(amount) >= 100 || (recipient === 'other' && otherNumber.length === 11) && Number(amount) >= 100 && network != 'Unknown Network'){
            setConfirmationScreen(true);
        }
    }

    const handleNumberChange = (e) => {
        const value = e.target.value;
        const regex = /^[0-9\b]+$/; // Regular expression to allow only numbers
        if (regex.test(value)) {
            setNumber(value);
        }
    }

  return user ? (
    <div>
        <Navbar />
        <div className='min-h-screen flex items-center justify-center w-full px-8 lg:px-24'>
            <ConfirmationScreen confirmationScreen={confirmationScreen} setConfirmationScreen={setConfirmationScreen} amount={amount} number={number} purchaseType={purchaseType} recipient={recipient} network={network}/>
            <div className='min-h-[60vh] flex flex-col gap-5 items-center justify-center'>
                <h1 className='text-3xl lg:text-4xl font-bold mb-10'>Buy Airtime</h1>
                <form className='flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
                <SelectRecipient network={network} setNetwork={setNetwork} setRecipient={setRecipient} recipient={recipient} number={number} setNumber={setNumber} handleNumberChange={handleNumberChange}/>
                <div className='flex flex-col items-center'>
                    <p className='text-xl font-semibold lg:text-2xl'>How Much?</p>
                    <div className='grid grid-cols-3 gap-4 justify-center items-center mt-4'>
                        <div className={`${amount === 100 && !customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setAmount(100)}}>₦100</div>
                        <div className={`${amount === 200 && !customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setAmount(200)}}>₦200</div>
                        <div className={`${amount === 500 && !customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setAmount(500)}}>₦500</div>
                        <div className={`${amount === 1000 && !customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setAmount(1000)}}>₦1000</div>
                        <div className={`${amount === 2000 && !customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setAmount(2000)}}>₦2000</div>
                        <div className={`${customAmount ? 'bg-black text-white' : 'cursor-pointer'} w-25 hover:bg-black hover:text-white h-25 rounded-lg border border-black flex items-center justify-center text-xl`} onClick={() => {setCustomAmount(true)}}>Custom</div>
                    </div>
                    <div>
                                {customAmount && 

                                    <div className='flex items-center mt-4 h-15 px-4 text-xl m-auto border border-black rounded-2xl'>
                                        <span className='text-gray-500 px-5'>₦</span> 
                                        <input value={amount} onChange={(e) => setAmount(e.target.value)} placeholder='Enter Amount' type="number" className='outline-0 text-xl m-auto'/>
                                    </div>
                                
                                }
    
                    </div>
                </div>
                <button type="submit" className='w-60 cursor-pointer h-20 bg-black rounded-lg text-white text-xl'>Buy Airtime</button>
                </form>
            
                            
            </div>
            
        </div>
        
        <Footer />
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
      <SignIn />
    </div>
  )
}

export default BuyAirtime