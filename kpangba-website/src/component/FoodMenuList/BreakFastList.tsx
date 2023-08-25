import { BreakfastList } from '@/json/StaticData';
import React from 'react'

function BreakFastList() {
    return (
        <div className='w-[35rem] flex items-center text-center justify-center border-b border-[#C2BEBE]'>
            <div className='mb-10'>
                {BreakfastList.map((item, index) => (
                    <div  key={index} className='border border-[#2B5F2B] bg-[#F7F8F7] rounded-lg inline-block p-2 mr-3 mb-3'>
                        <span className='block text-lg font-normal'>{item}</span>
                    </div>
                    
                ))}
            </div>
        </div>
    )
}

export default BreakFastList;