import React from 'react'
import Image from 'next/image';
import { Logo } from '@/assets';
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
function Footer() {
  const [footerRef, footerInView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  });
  return (
    <div className='bg-[#2B5F2B]'>
      <motion.div
        ref={footerRef}
        initial={{ opacity: 0, y: -50 }}
        animate={footerInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 1 }}
      >
        <div className='mt-10 py-10 px-5 flex flex-row gap-5 lg:gap-64 item-start text-start   justify-center'>
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
      </motion.div>
    </div>
  )
}

export default Footer;