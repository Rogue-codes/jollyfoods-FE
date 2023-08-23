'use client'

import React, { useState } from 'react'
interface SelectProps {
  options: string[]
  icon: any,
  className: string
}
export default function Select({ options, icon, className }: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false)


  const [selected, setSelected] = useState<number>(0)

  const handleSelected = (index: number) => {
    setSelected(index)
  }

  return (
    <div className={`flex relative gap-10 items-start justify-between border rounded-2xl p-3 bg-orange-400 border-[#E8EDE8]` + className} onClick={() => setShowDropDown(!showDropDown)} tabIndex={0} onBlur={() => setShowDropDown(false)}>
      <span className='text-[#302929] text-base font-normal'>{options[selected]}</span>
      {icon}      {showDropDown && <div className='w-full cursor-pointer absolute left-0 top-14 z-10 bg-white border border-[#E8EDE8] max-h-[300px] overflow-y-scroll'>
        {options.map((item, index) => (
          <p key={index} className={`${index === selected && "bg-[#FADB21]"} p-3 hover:bg-[#2B5F2B] hover:text-white`} onClick={() => handleSelected(index)}>{item}</p>
        ))}
      </div>}
    </div>
  )
}
