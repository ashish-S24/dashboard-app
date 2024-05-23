import React from 'react';
import heroImage from "../assets/hero-card.png"

const Card = ({id , value , label , profit , spike}) => {
  return (
    <div className='w-full h-[20vh] flex bg-white p-4 rounded-md shadow-sm'>
        <div className='flex flex-col justify-around h-full w-full'>
          <h1 className='text-gray-600 text-[20px] font-semibold'>{id == 1 ? "" : "$"} {value}</h1>
          <label className='text-gray-600 font-normal text-[14px]'>{label}</label>
          <label className='text-gray-400 font-normal text-[14px] flex items-center gap-2'> 
            <span className={`${profit ? "bg-green-300 text-green-600": "bg-red-300 text-red-600"} rounded-md px-1 text-[12px]`}>{profit?"+":"-"} {spike}%</span>
            Since the last week
          </label>
        </div>
        <div className='flex justify-end relative'>
            <div className='bg-blue-100 h-14 w-14 rounded-full flex items-center justify-center mt-2 mr-2'>
                { id == 1 ? <svg className='stroke-blue-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag align-middle"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                  : <svg className='stroke-blue-600' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dollar-sign align-middle"><line x1="12" x2="12" y1="2" y2="22"></line><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg>
                }
            </div>
        </div>
    </div>
  )
}

export default Card