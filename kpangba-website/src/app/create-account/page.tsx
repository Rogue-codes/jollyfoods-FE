import { ArrowLeft } from 'iconsax-react'
import React from 'react'
import Image from 'next/image';
import { Logo } from '@/assets';
function CreateAccount() {
    return (
        <div className='flex flex-col bg-green-500 w-full pt-10 px-16 h-screen'>
            <div className='flex flex-row gap-8'>
                <ArrowLeft />
                <span>Go Back</span>
            </div>
            <div className='flex flex-row w-[75.75] h=[45.75]'>
                <div className='bg-yellow-400'>
                <form action="">
                    <div className='w-full'>
                        <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
                    </div>
                    <span className='text-[20px]'>Kpanbga</span>


                </form>
                </div>
               
            </div>
        </div>
    )
}

export default CreateAccount