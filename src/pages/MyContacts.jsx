import React, {useState} from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { Plus, Search, User } from 'lucide-react'
import { useUser } from '@clerk/react'
import { assets } from '../assets/assets'
import ContactList from '../components/ContactList'
import AddContact from '../components/AddContact'

const MyContacts = () => {

    const fetchContacts = async () => {}

    const [contacts, setContacts] = useState([])
    const [addContact, setAddContact] = useState(false)
    const {user} = useUser();
    const {myNumber} = assets;

    const handleSubmit = (e) => {
        e.preventDefault();
    }

  return user ? (
    <div className='flex justify-center min-h-screen w-full'>
        <Navbar />
        <div className='w-full px-6 flex lg:px-24 gap-5 items-center flex-col mt-20'>
            <div className='flex items-center justify-between w-full'>
                <h1 className='text-3xl lg:text-4xl font-bold'>My Contacts</h1>
                <Plus className='w-8 cursor-pointer text-blue-600' onClick={() => setAddContact(true)}/>
            </div>
            <div className={`${addContact ? 'flex' : 'hidden'} py-5 justify-center items-center w-full`} >
                <AddContact addContact={addContact} setAddContact={setAddContact}/>
            </div>
            <div className='w-full bg-gray-200 h-10 rounded-xl flex items-center px-4'>
                <Search className='w-5 text-gray-500 mr-3' />
                <input type="text" placeholder="Search" className='border-0 outline-0 text-lg w-full' />
            </div>
            <hr className='w-full text-gray-300'/>
            <div className='flex w-full gap-5'>
                <img src={user?.imageUrl || <User />} alt="Profile Image" className='h-15 rounded-full'/>
                <div className='flex flex-col'>
                    <p className='text-lg font-semibold'>{user?.firstName}</p>
                    <p className='text-gray-500'>Me</p>
                    <p className='text-gray-500'>{myNumber}</p>
                </div>
            </div>
            <hr className='w-full text-gray-300'/>
            <ContactList />
        </div>
        <Footer />
    </div>
  ) : (
    <div className='flex items-center justify-center h-screen'>
          <SignIn />
        </div>
  )
}

export default MyContacts