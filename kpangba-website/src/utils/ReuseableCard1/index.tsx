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
            <div> <Image src={img} alt="" width={250} height={196} className='rounded-2xl' /></div>   
            <div className='flex flex-col gap-3 ml-7 text-[#302929]'>
                <span className='text-2xl font-semibold'>{text1}</span>
                <span className='text-base font-normal'>{text2}</span>
                <div>
                    {icon} <span>{text3}</span>
                </div>
            </div>
        </div>
    )
}

export default ReuseableCard1;