import React from 'react'
import { Logo } from "../../assets/index";
import Image from 'next/image';
import Link from 'next/link';
export default function NavBar() {
    return (
        <div className="p-2 flex justify-between fixed bg-white pt-6 w-full left-0 top-0 z-50">
            <div className="flex gap-3 items-center">
              <div className='w-full'>
                <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
                </div> 
                <span className='text-[20px]'>Kpanbga</span>
            </div>
            <div className="flex gap-5 font-normal text-base items-center">
                <span>About</span>
                <span>Partners</span>
                <span>Blog</span>
                <span className='bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer'  >
                  <Link href="/create-account">Create account</Link>  
                    </span>
            </div>
        </div>
    )
}

