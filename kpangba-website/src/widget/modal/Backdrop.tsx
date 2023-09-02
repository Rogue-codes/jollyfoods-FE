import React, { ReactNode } from 'react'
interface BackDropProps{
    children: ReactNode
}
export default function Backdrop({children}:BackDropProps) {
  return (
    <div className='w-full pb-4 pt-72 h-full fixed top-0 left-0 !bg-[#3029296d] !z-[999] flex justify-center items-center overflow-y-scroll'>
        {children}
    </div>
  )
}
