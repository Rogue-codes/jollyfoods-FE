import React from 'react'
import Image from 'next/image';
import { Logo } from '@/assets';
function Footer() {
  return (
    <div className='mt-24 bg-[#2B5F2B] py-10 px-24 flex flex-row gap-72 item-start text-start justify-start'>
      <div className='flex flex-row gap-6 items-start justify-start text-start'>
       <div className='w-full'><Image alt="" src={Logo} width={50} height={50} /></div> 
        <span className='font-semibold text-xl text-[#ffff] mt-3 '>Kpangba</span>
      </div>
      <div className='flex flex-row gap-28'>
        <div className='flex flex-col'>
          <span className='font-semibold text-xl text-[#ffff] mb-4'>City</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>Lekki</span>
          <span className='font-normal text-base text-[#ffff]'>Surulere</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold text-xl text-[#ffff] mb-4'>City</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>Lekki</span>
          <span className='font-normal text-base text-[#ffff]'>Surulere</span>
        </div>
        <div className='flex flex-col'>
          <span className='font-semibold text-xl text-[#ffff] mb-4'>City</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>meals</span>
          <span className='font-normal text-base text-[#ffff] v'>Lekki</span>
          <span className='font-normal text-base text-[#ffff] mb-2.5'>Surulere</span>
        </div>
      </div>
    </div>
  )
}

export default Footer;