import React from 'react'
import Image from 'next/image';
import { Meat } from '@/assets';
import Link from 'next/link';

function ReuseableCard2() {
    return (
        <div className="flex gap-3 bg-[#2B5F2B] text-[#ffff] lg:w-[35rem] w-full lg:pt-14 pt-6 pb-4  lg:px-4 px-14 pl-4 cursor-pointer justify-start items-start lg:justify-center lg:items-center rounded-2xl relative">
            <div className='flex flex-col gap-3'>
                <div className='lg:text-[40px] flex flex-col lg:gap-8 gap-2 text-xl font-bold'>
                    <div>e-health card for</div>
                    <span>all your health needs</span>
                </div>
                <div className='lg:text-base text-xs lg:w-[30rem] w-[12rem] font-normal lg:mt-10 mt-2'>
                    With our electronic card, you get the premium value <br />
                    of any choice of your health care service, all you <br />
                    need to do is buy/order a meal from us today
                </div>
                <Link href="/create-account">
                    <div className='bg-[#ffffff] mb-2 lg:mt-10 mt-5 w-[10rem] px-5 lg:py-4 py-2 items-center text-center rounded-3xl text-base text-[#2B5F2B]'>
                        Create Account
                    </div>
                </Link>
            </div>
            <div className='bg-[#FADB21] right-0 lg:w-[7rem] lg:h-[16rem] h-[10rem] w-[4rem] lg:pl-5 pt-4 rounded-tl-2xl rounded-br-2xl absolute ml-[13rem] lg:ml-[27.8rem] lg:mt-[6.6rem] mt-[7.3rem]'>
                <Image src={Meat} alt="" className='rounded-lg w-full h-full' />
            </div>
        </div>
    )
}

export default ReuseableCard2;