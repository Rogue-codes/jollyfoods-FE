import React, { ReactNode } from 'react'
interface BackDropProps{
    children: ReactNode
    reservationsuccess: boolean
}
export default function Backdrop({children, reservationsuccess}:BackDropProps) {
  return (
    <div className={`pb-4 pt-72  w-full h-full fixed top-0 left-0 !bg-[#3029296d] !z-[999] flex justify-center items-center scrollbar-none overflow-y-scroll`}>
        {children}
    </div>
  )
}
