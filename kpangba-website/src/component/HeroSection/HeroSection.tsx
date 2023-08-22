import React from 'react'
import Image from "next/image";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from '@/assets';
 function HeroSection() {
  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center z-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center text-[56px] text-[#302929] font-extrabold w-[48rem] mt-8'>
          <span>Your meals, secure</span>
          <span >quality <span className='bg-[#FCEA7D] rounded-xl px-2'>healthcare service</span></span>
        </div>
        <div className='flex flex-col items-center mt-8 justify-center text-xl font-normal'>
          <span>We help you solve out-of-pocket health expenses when you</span>
          <span>consistently buy meals from our mobile restaurants.</span>
        </div>
      </div>
      <div className='bg-[#FEF8D2] border mt-16 border-[#D0B61B] p-8 rounded-3xl'>
        <div>       
           all the drop downs annd select fields will be displayed here
        </div>
      </div>
      <div className='flex flex-row mt-[8rem] items-center justify-center gap-5'>
        <Image src={HeroImage1} alt="" width={248} height={217} className='rounded-xl' />
        <Image src={HeroImage2} alt="" width={283} height={259} className='rounded-xl' />
        <Image src={HeroImage3} alt="" width={326} height={294} className='rounded-xl' />
        <Image src={HeroImage4} alt="" width={293} height={372} className='rounded-xl' />
      </div>
    </div>
  )
}

export default HeroSection;
