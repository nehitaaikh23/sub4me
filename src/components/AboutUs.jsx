import { Contact, Globe, Phone, Radar } from 'lucide-react'
import React from 'react'

const features = [
    {logo: <Phone className='text-gray-800 w-6 h-6 rounded-lg'/>, title: "Buy Airtime", description: "Buy airtime instantly and securely for all major networks in Nigeria."},
    {logo: <Globe className='text-gray-800 w-6 h-6 rounded-lg'/>, title: "Buy Data", description: "Buy data bundles for MTN, Glo, Airtel and 9mobile with fast processing times and at competitive rates."},
    {logo: <Radar className='text-gray-800 w-6 h-6 rounded-lg'/>, title: "Auto Detect Network", description: "Automatically detect the network of the phone number you want to recharge."},
    {logo: <Contact className='text-gray-800 w-6 h-6 rounded-lg'/>, title: "Save Recipient", description: "You can save recipient information for quick and easy transactions."}
]

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center px-8 lg:px-24 my-10 w-full">
        <div className='w-full flex flex-col gap-2 justify-center items-center text-center'>
            <h1 className='text-2xl lg:text-3xl font-bold'>The Only Data and Airtime App You Need</h1>
            <p>Airtime and Data Purchase Made Simple...</p>
        </div>
        <div className="mt-3 flex flex-col items-center gap-5 max-w-full md:grid md:grid-cols-2 md:gap-x-10">
            {features.map((feature, i) => {
                return <div className='flex cursor-pointer hover:-translate-y-2 transition flex-col justify-center items-center rounded-lg shadow-xl h-60 w-[280px]'>
                    <div className='bg-gray-300 w-9 h-9 rounded-lg flex items-center justify-center self-start ml-10 mb-5'>
                        {feature.logo}
                    </div>
                
                    <div className='max-w-2xs'>
                        <h1 className='font-semibold'>{feature.title}</h1>
                        <p>{feature.description}</p>
                    </div>
                </div>
            })
                }
        </div>

    </div>
  )
}

export default AboutUs