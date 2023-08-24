'use client'

import React, { useState } from 'react'
interface SelectProps {
  options: string[]
  icon?: any,
  className?: string,
  switchIcon?: boolean
}
export default function Select({ options, icon, className, switchIcon = false }: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)


  const [selected, setSelected] = useState<number>(0)
  const [searchVal,setSearchVal] = useState<string>("")

  const handleSelected = (index: number) => {
    setSelected(index)
    setSearchVal(options[index]);  
  }
  const lowerCaseSearchVal = searchVal.toLowerCase();
  const opts = options.filter(opt => opt.toLowerCase().includes(lowerCaseSearchVal));

  return (
    <div
      className={`flex relative gap-10 items-start justify-between border rounded-2xl p-3 bg-white border-[#E8EDE8] ${className}`}
      onClick={() => setShowDropDown(true)}
      tabIndex={0}
      onBlur={() => setShowDropDown(false)}
    >
      {switchIcon ? (
        <>
          {icon}
          <input
            className="text-[#302929] text-base font-normal focus:outline-none"
            value={searchVal}
            onChange={(e)=>setSearchVal(e.target.value)}
            placeholder={options[selected]}
          />
        </>
      ) : (
        <>
          <input
            className="text-[#302929] text-base font-normal"
            // value={options[selected]}
            // onChange={(e)=>setSelected(e.target.value)}
            placeholder={options[selected]}
            onChange={(e)=>setSearchVal(e.target.value)}
          />
          {icon}
        </>
      )}

      {showDropDown && <div className='w-full cursor-pointer absolute left-0 top-12 z-10 bg-white border border-[#E8EDE8] max-h-[300px] overflow-y-scroll'>
        {opts.map((item, index) => (
          <p key={index} className={`${index === selected && "bg-[#FADB21]"} p-3 hover:bg-[#2B5F2B] hover:text-white`} onClick={() => handleSelected(index)}>{item}</p>
        ))}
      </div>}
    </div>
  )
}
