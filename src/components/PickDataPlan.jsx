import React, { useState } from 'react'
import { dataPlans } from '../assets/assets'
import { X, Check } from 'lucide-react'

const PickDataPlan = ({ setPlan, plan, pickPlan, setPickPlan, network, planName, setPlanName }) => {

  const planTypes = [
    "Daily", "Weekly", "Monthly", "Yearly", "Others"
  ]

  const [planType, setPlanType] = useState('Daily')

  return (
    <div className='min-h-screen fixed flex items-center justify-center w-full px-8 lg:px-24 z-50 backdrop-blur-sm'>
        <div className='flex items-center bg-white px-10 py-5 flex-col gap-2 rounded-lg shadow-md'>
          <div className='flex w-full justify-end'><X onClick={() => setPickPlan(false)} className='text-slate-500 cursor-pointer w'/></div>
            <p className='text-xl font-semibold lg:text-2xl'>{network} Data Plans</p>
            <div className='flex gap-4'>
                {planTypes.map((plan, i) => {
                  return (
                    <div onClick={() => setPlanType(plan)} className={`${planType === plan ? 'bg-black text-white' : ''}
                       hover:bg-black hover:text-white flex transition  cursor-pointer justify-center items-center 
                       p-2 border border-gray-600 rounded-lg`} key={i}>{plan}</div>
                  )
                })}
            </div>
            <hr className='w-full text-gray-300'/>
            <div className='flex flex-col w-full'>
              {dataPlans.map((item, i) => {
                
                  if (item.network === network){
                    return <div key={i} className='w-full'>
                      {item.plans.filter((plan) => plan.duration === planType).map((dataplan, i) => {
                        return <div key={i}>
                            <div onClick={() => {setPickPlan(false); setPlanName(dataplan.name); setPlan(dataplan.id)}} className='flex justify-between items-center w-full cursor-pointer py-1'>
                              <p>{dataplan.name}</p>
                              <div className='flex gap-1 items-center'>
                                <p>₦{dataplan.price}</p>
                                {plan === dataplan.id && <Check className='w-5'/>}
                              </div>
                            </div>
                            <hr className='w-full text-gray-300'/>
                        </div>
                        
                        })
                      }
                      
                    </div>
                    
                  
                }
                
                
              })}
            </div>
        </div>

    </div>
  )
}

export default PickDataPlan