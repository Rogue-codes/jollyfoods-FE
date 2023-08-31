import { TabOptions } from '@/interface'
import React, { Dispatch, SetStateAction } from 'react'

interface MenuProps{
  tabOptions: TabOptions[] | undefined
  setActiveTab: Dispatch<SetStateAction<number>>
  activeTab:number
}

export default function MenuTab({tabOptions,setActiveTab,activeTab}:MenuProps) {
  return (
    <div className='border-b-4 relative my-9 pb-2 border-[#E2E9E2] flex justify-between w-[180%]'>
      {
        tabOptions?.map((tab,index)=>(
          <p className='textlg cursor-pointer font-semibold text-[#302929]' onClick={()=>setActiveTab(index)}>
            {tab.meal_type}
          </p>
        ))
      }
      <div className={`${activeTab === 0 ? "left-0" : activeTab === 1 ? "left-[43%]" : "left-[80%]"} absolute w-[20%] border-b-4 -bottom-1 transition-all border-[#FADB21]`}></div>
    </div>
  )
}
