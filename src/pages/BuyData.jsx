import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { assets } from '../assets/assets'
import toast from 'react-hot-toast'
import ConfirmationScreen from '../components/ConfirmationScreen'
import SelectRecipient from '../components/SelectRecipient'
import { useUser, SignIn } from '@clerk/react'
import PickDataPlan from '../components/PickDataPlan'
import { ArrowBigDown, ArrowDownWideNarrow, ChevronDown } from 'lucide-react'

const BuyData = () => {

    const {user} = useUser();

    const [number, setNumber] = React.useState('')
    const [plan, setPlan] = React.useState('')
    const [recipient, setRecipient] = React.useState('')
    const [confirmationScreen, setConfirmationScreen] = React.useState(false)
    const [network, setNetwork] = useState(null)
    const [planName, setPlanName] = useState(null)
    const purchaseType = 'data'

    const [pickPlan, setPickPlan] = useState(false);

    const fetchUserNumber = async () => {

    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const otherNumber = number.trim();
        if (!recipient){
            toast.error("Please select a recipient")
        }
        if (!plan){
            toast.error("Please select a plan")
        }
        if (recipient === 'other' && otherNumber.length !== 11){
            toast.error("Please enter a valid phone number")
        }
        if (!network || network === "Unknown Network"){
            toast.error("Please enter a valid number or Pick Network")
        }
        if (recipient === 'myself' && plan || (recipient === 'other' && otherNumber.length === 11) && plan && network != 'Unknown Network'){
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

    const handleSelectPlan = () => {
        if (network){
            setPickPlan(true)
        } else{
            toast.error('Please enter a valid number or Pick Network')
        }
        
    }

  return user ? (
    <div>
        
        <Navbar />
        <div className='min-h-screen flex items-center justify-center w-full px-12 lg:px-24'>
            {pickPlan && (<PickDataPlan planName={planName} setPlanName={setPlanName} setPlan={setPlan} plan={plan} pickPlan={pickPlan} setPickPlan={setPickPlan} network={network}/>)}
            <ConfirmationScreen planName={planName} confirmationScreen={confirmationScreen} setConfirmationScreen={setConfirmationScreen} plan={plan} number={number} purchaseType={purchaseType} recipient={recipient} network={network}/>
            <div className='min-h-[60vh] flex flex-col gap-5 items-center justify-center'>
                <h1 className='text-2xl lg:text-3xl font-bold mb-10'>Buy Data</h1>
                <form className='flex flex-col items-center justify-center gap-5' onSubmit={handleSubmit}>
                 
                <SelectRecipient network={network} setNetwork={setNetwork} setRecipient={setRecipient} recipient={recipient} number={number} setNumber={setNumber} handleNumberChange={handleNumberChange}/>
                <div className='flex flex-col items-center'>
                    <p className='text-lg font-semibold lg:text-xl'>Pick a Plan</p>
                    <div className='flex mt-3'>
                        <div className='flex border border-gray-600 rounded-2xl h-12 lg:h-14 w-3xs lg:w-lg text-sm p-3 items-center justify-between cursor-pointer' onClick={() => handleSelectPlan() }>
                            <span className='text-gray-600 h-5'>{planName ? planName : 'Select a Data Plan'}</span>
                            <ChevronDown />
                        </div>           
                    </div>
                    
                </div>
                <button type="submit" className='w-40 cursor-pointer h-15 bg-black rounded-lg text-white text-lg'>Buy Data</button>
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

export default BuyData;