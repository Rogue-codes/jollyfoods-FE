import React from 'react'
import Image from 'next/image';
import { Logo } from '@/assets';
function Footer() {
  return (
    <div className='mt-24 bg-[#2B5F2B] py-10 lg:px-24 px-5 flex flex-row gap-5 lg:gap-72 item-start text-start justify-center'>
      <div className='flex flex-row gap-2 lg:gap-6 items-start justify-start text-start'>
       <div className='w-[3rem] h-[3rem]'><Image alt="" src={Logo} className='w-full h-full' /></div> 
        <span className='font-semibold lg:text-xl text-base text-[#ffff] lg:mt-3 mt-0 '>Kpangba</span>
      </div>
      <div className='flex flex-row lg:gap-28 gap-3'>
        <div className='flex flex-col'>
          <span className='font-semibold lg:text-xl text-sm  text-[#ffff] mb-4'>City</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>Contact</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold lg:text-xl text-sm text-[#ffff] mb-4'>City</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>Contact</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold lg:text-xl text-sm text-[#ffff] mb-4'>City</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal lg:text-base text-xs text-[#ffff] mb-2.5'>Contact</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;