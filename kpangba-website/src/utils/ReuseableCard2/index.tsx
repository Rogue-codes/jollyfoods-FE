import React from 'react'
import Image from 'next/image';
import { Meat } from '@/assets';

function ReuseableCard2() {
    return (
        <div className="flex gap-3 bg-[#2B5F2B] text-[#ffff] w-[35rem] h-[25.75rem] cursor-pointer justify-center items-center rounded-2xl relative">
            <div className='flex flex-col gap-3'>
                <div className='text-[40px] font-bold'>
                    e-health card for <br /> all your health needs
                </div>
                <div className='text-base font-normal'>
                    With our electronic card, you get the premium value <br />
                    of any choice of your health care service, all you <br />
                    need to do is buy/order a meal from us today
                </div>
                <div className='bg-[#ffffff] mb-7 w-[10rem] px-5 py-4 items-center text-center rounded-3xl text-base text-[#2B5F2B]'>
                    Create Account
                </div>
            </div>
            <div className='bg-[#FADB21] pl-5 pt-4 rounded-tl-2xl rounded-br-2xl absolute ml-[29.9rem] mt-[15.1rem]'>
                <Image src={Meat} alt="" width={403} height={456} className='rounded-lg' />
            </div>
        </div>
    )
}

export default ReuseableCard2;