import { TabOptions } from '@/interface';
import React from 'react'

interface BreakfastProps{
    tabOptions: TabOptions[] | undefined
    activeTab:number;
}
function BreakFastList({tabOptions,activeTab}:BreakfastProps) {
    return (
        <div className='w-[30rem] border-b border-[#C2BEBE] '>
            <div className='mb-10 border-b border-[#C2BEBE] flex justify-start gap-4 pb-12 items-center flex-wrap'>
                {
                    tabOptions && tabOptions[activeTab].meals.map((meal,index)=>(
                        <div key={index} className='px-6 my-3 py-[14px] rounded-xl border border-[#2B5F2B] bg-[#F7F8F7] text-lg'>
                            {meal}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default BreakFastList;