import React from 'react'

const ContactUs = () => {

    const submitHandler = (e) => {
        e.preventDefault();
    }
  return (
    <div className='my-10 px-8 lg:px-24 w-full'>
        <h1 className='w-full text-center mb-2 lg:mb-2 text-2xl lg:text-3xl font-bold'>Send Us A Message</h1>
        <p className='text-center mb-6'>We look forward to your feedback and suggestions!</p>
       
            <div className='flex w-full justify-center'>
                <form onSubmit={submitHandler} action="" className='flex flex-col gap-2 max-w-2xl items-center'>
                    <label className='self-start' htmlFor="name">Full Name</label>
                    <input className='border border-gray-500 lg:w-lg py-2 px-2 w-72 rounded-lg outline-0' type="text" name="name" placeholder='Enter Your Name' />
                    <label className='self-start' htmlFor="email">E-mail</label>
                    <input className='border border-gray-500 lg:w-lg py-2 px-2 w-72 rounded-lg outline-0' type="email" name="email" placeholder='Enter Your Email' />
                    <label className='self-start' htmlFor="subject">Subject</label>
                    <input className='border border-gray-500 lg:w-lg py-2 px-2 w-72 rounded-lg outline-0' type="text" name='subject' placeholder='Dispute, Suggestions, General...'/>
                    <label className='self-start' htmlFor="message">Message</label>
                    <textarea className='border resize-none h-32 border-gray-500 lg:w-lg py-2 px-2 w-72 rounded-lg outline-0' name="message" id="" placeholder='Enter Your Message Here'></textarea>
                    <button className='w-25 h-10 rounded-lg bg-black text-white mt-5' type='submit'>Send</button>
                </form>
            </div>
                
           
        
    </div>
    
  )
}

export default ContactUs