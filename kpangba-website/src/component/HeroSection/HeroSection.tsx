import React from 'react'

export default function HeroSection() {
  return (
    <div className='bg-blue-400 mt-5 flex flex-col items-center justify-center'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center text-[56px] text-[#302929] font-extrabold w-[48rem]'>
         <span>Your meals, secure</span> 
         <span>quality healthcare service</span> 
        </div>
        <div className='flex flex-col items-center justify-center text-xl font-normal mt-2'>
         <span>We help you solve out-of-pocket health expenses when you</span> 
        <span>consistently buy meals from our mobile restaurants.</span>  
        </div>
      </div>
      <div></div>
    </div>
  )
}

