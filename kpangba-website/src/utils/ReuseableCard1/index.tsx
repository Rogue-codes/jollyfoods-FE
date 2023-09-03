import React from 'react'
import Image from 'next/image';
interface containerProps {
    text1?: string;
    text2?: string;
    img?: any;
    icon?: any;
    text3?: string;
}

function ReuseableCard1({ text1, text2, text3, img, icon }: containerProps) {
    return (
        <div className="flex cursor-pointer gap-4 text-start justify-start items-center rounded-xl">
            <div className='w-[20rem] h-[12rem]'>
                <Image src={img} alt="" className="w-full h-full rounded-2xl" />
            </div>
            <div className='flex flex-col gap-3 ml-7 text-[#302929]'>
                <span className='lg:text-2xl text-lg font-semibold'>{text1}</span>
                <span className='lg:text-base text-sm font-normal'>{text2}</span>
                <div>
                    {icon} <div>{text3}</div>
                </div>
                <div className="w-[100%] flex items-center justify-center text-center bg-[#2B5F2B] px-4 py-3 rounded-2xl">
                    <button className='text-white font-normal text-base'>Reserve</button>
                </div>
            </div>
        </div>
    )
}

export default ReuseableCard1;