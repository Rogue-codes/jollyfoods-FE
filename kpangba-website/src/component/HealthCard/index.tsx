import ReuseableCard2 from '@/utils/ReuseableCard2'
import React from 'react'
import Image from 'next/image';
import Card1 from "../../assets/Card1.png"
function HealthCard() {
    return (
        <div className='flex gap-4 mt-[8rem] items-center justify-center  flex-row'>
            <ReuseableCard2 />
            <div className='bg-[#FCEA7D] px-7 py-3 rounded-3xl'>
                <Image src={Card1} width={552} height={412} alt="" />
            </div>
        </div>
    )
}

export default HealthCard