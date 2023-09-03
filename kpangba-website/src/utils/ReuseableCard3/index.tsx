import React from 'react'
import Image from 'next/image';
import Check from "../../assets/Check.png"
interface containerProps {
    text1?: string;
    text2?: string;
    text3?: string;
    text4?: string;
    text5?: string;
}
function ReuseableCard3({ text1, text2, text3, text4, text5 }: containerProps) {
    return (
        <div className='flex flex-col items-center text-center w-[18rem] lg:mb-16 mb-8 justify-start'>
            <div className=''>
                <div className='flex pt-10 pb-8 flex-col items-center text-center justify-center rounded-t-xl border-t-2 border-l-2 border-r-2 border-[#B8CAB8] bg-[#E8EDE8]'>
                    <span className='font-bold text-xl text-[#302929]'>{text1}</span>
                    <span className='font-normal text-md text-[#302929]'>{text2}</span>
                </div>
                <div className='flex flex-col pt-6 pb-10 border-b-2 border-l-2 border-r-2 border-[#B8CAB8] rounded-b-xl px-4 bg-white items-start text-start justify-start'>
                    <div className='flex items-center text-center justify-center'>
                        <Image src={Check} alt='' /> <span className='ml-5 font-normal text-md text-[#302929]'>{text3}</span>
                    </div>
                    <div className='flex items-center text-center justify-center'>
                        <Image src={Check} alt='' /> <span className='ml-5 font-normal text-md text-[#302929]'>{text4}</span>
                    </div>
                    <div className='flex items-center text-center justify-center'>
                        <Image src={Check} alt='' /> <span className='ml-5 font-normal text-md text-[#302929]'>{text5}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ReuseableCard3