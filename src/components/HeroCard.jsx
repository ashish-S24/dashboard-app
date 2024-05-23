import React from 'react';
import heroImage from "../assets/hero-card.png"

export const HeroCard = () => {
  return (
    <div className='w-full h-[20vh] flex bg-blue-100 p-4 rounded-md shadow-sm'>
        <div className='flex flex-col gap-2 h-full justify-between w-full'>
          <h1 className='text-blue-500 text-md font-semibold'>Welcome <br/> back, Chris!</h1>
          <p className='text-blue-500 font-normal text-md'> Vcreate <br/> Dashboard </p>
        </div>
        <div className='w-full flex justify-end relative'>
            <img className='absolute -bottom-4 h-full' src={heroImage}></img>
        </div>
    </div>
  )
}
