import React from 'react'

const AddContact = ({editInfo, setEditInfo, addContact, setAddContact}) => {

    const handleSubmit = (e) => {
        e.preventDefault();
    }


  return (
        <form action="" onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>
                <div className='flex gap-2'>
                    <input type="text" placeholder='First Name' className='w-full h-10 outline-0 border rounded-lg border-gray-300 px-5'/>
                    <input type="text" placeholder='Last Name' className='w-full h-10 outline-0 border rounded-lg border-gray-300 px-5' />
                </div>
                <div className='flex gap-2'>
                    <select name="network" className='border rounded-lg border-gray-300 px-2 outline-0'>
                        <option value="glo">Glo</option>
                        <option value="mtn">MTN</option>
                        <option value="airtel">Airtel</option>
                        <option value="9mobile">9Mobile</option>
                    </select>
                    <input type="tel" placeholder='08012345678' className='w-full h-10 outline-0 border rounded-lg border-gray-300 px-5'/>
                </div>
                <div className='flex gap-3 self-end'>
                    <button type='submit' className='bg-black cursor-pointer text-white rounded-lg px-5 h-10'>Save</button>
                    {addContact && (<button className='bg-white  cursor-pointer text-black border border-black px-5 rounded-lg h-10' onClick={() => {setAddContact(false)}}>Cancel</button>)}
                    {editInfo && (<button className='bg-white  cursor-pointer text-black border border-black px-5 rounded-lg h-10' onClick={() => {setEditInfo(false)}}>Cancel</button>)}
                </div>
                <hr className='w-full text-gray-300'/>

         </form>
    
  )
}

export default AddContact