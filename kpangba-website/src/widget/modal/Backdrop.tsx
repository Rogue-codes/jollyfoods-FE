import React, { ReactNode } from 'react'
interface BackDropProps{
    children: ReactNode
}
export default function Backdrop({children}:BackDropProps) {
  return (
    <div className='w-full border-4 border-red-900 h-full fixed top-0 left-0 !bg-[#000000] !z-[999] flex justify-center items-center'>
        {children}
    </div>
  )
}
