import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
interface containerProps {
    text1?: string;
    text2?: string;
    img?: any;
    icon?: any;
    number?: string;
    time?: string;
    amount?: string;
    icon2?: any;
}
function ResultCard({ text1, text2, img, number, icon, time, amount, icon2 }: containerProps) {
    return (
        <div className="flex cursor-pointer gap-3 text-start justify-start items-start rounded-xl border border-[#FDF3B5]  ">
            <div className='w-[16rem] h-[14rem]'>
                <Image src={img} alt="" className='rounded-2xl object-cover w-full h-full' />
            </div>
            <div className='flex flex-col gap-3 ml-7 mt-8 text-[#302929]'>
                <div className='flex gap-4 items-start justify-start text-left'>
                    <span className='text-2xl font-semibold'>{text1}</span>
                    <div className='flex px-2 py-1 gap-2 items-center justify-center text-center bg-[#FEFAE1] rounded-xl'>
                        {icon}
                        <span>{number}</span>
                    </div>
                </div>
                <span className='text-base font-normal w-[24rem]'>{text2}</span>
                <div className='flex gap-4'>
                    <span className='flex gap-4 p-2 items-center justify-center text-center bg-[#FEFAE1] rounded-3xl'>
                        {icon2}
                        <span className='text-base font-normal p-2'> {time}</span>
                    </span>
                    <div className='px-2 flex items-center justify-center text-center bg-[#FEFAE1] rounded-3xl'>
                        <span className='text-base font-normal'>
                            {amount}
                        </span>
                    </div>
                    <Link href="/food-menu">
                        <button className='bg-[#2B5F2B] py-4 px-5 text-base font-normal text-white rounded-2xl'>
                            continue
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ResultCard