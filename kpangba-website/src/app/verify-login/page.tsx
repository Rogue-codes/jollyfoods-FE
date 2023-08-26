"use client"
import { ArrowLeft } from 'iconsax-react'
import React, { useState } from 'react'
import Image from 'next/image';
import { Breakfast, Logo } from '@/assets';
import Link from 'next/link';
import PaymentModal from '@/component/PaymentModal';
// import OtpInput from '@/component/OtpInput';

function VerifyLoginPage() {
    const [open, setOpen] = useState<boolean>(false)
    const openPaymentModal = () => {
        setOpen(true);
        console.log("clicked");
    }
    return (
        <div className='flex flex-col bg-white w-full pt-6 px-32'>
            <Link href="/create-account">  <div className='flex flex-row mt-8 gap-8 items-center'>
                <ArrowLeft />
                <span className='font-bold text-2xl'>Go Back</span>
            </div>
            </Link>
            <div className='flex flex-row w-[75.75] px-6 gap-10 h-[45.75] items-center text-center justify-center py-8 bg-white rounded-xl mt-11 border-2 shadow-xl'>
                <div className='bg-white text-left w-1/2 px-8'>
                    <div className='flex w-[8.7rem] items-center mt-14 text-center justify-center mb-4'>
                        <div className='w-full'>
                            <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
                        </div>
                        <span className='text-[20px] font-semibold'>Kpanbga</span>
                    </div>
                    <div className='flex flex-col items-start justify-start text-center'>
                        <span className='text-[#302929] text-[32px] font-bold'>
                            Verify it's you
                        </span>
                        <span className='text-[#302929] mt-5 text-base font-normal'>
                        Enter code sent to your e-mail and phone number
                        </span>
                    </div>
                    <form action="" className='mt-10'>
                        {/* <OtpInput      /> */}
                        <div className='flex gap-14 mt-12 items-start text-center justify-start'>
                            <span className='text-[#2B5F2B] text-base font-normal cursor-pointer'>Resend code</span>
                            <span className='text-[#302929] text-base font-normal'>00:60 secs</span>
                        </div>
                        <div className='bg-[#2B5F2B] flex items-center justify-center text-center mb-5 mt-24 text-[#ffff] w-full py-3 rounded-3xl font-normal text-base' onClick={openPaymentModal}>
                            Verify Code
                        </div>
                    </form>
                </div>
                <div className='bg-[#2B5F2B] mr-4 pl-14 rounded-xl flex flex-col items-start text-start justify-start w-1/2'>
                    <div className='flex flex-col mt-16 text-left'>
                        <span className='text-[#fff] text-[28px] font-semibold'>
                            e-health card <br />
                            for all your health needs <b />
                        </span>
                        <span className='text-[#fff] text-base mt-5 font-normal'>
                            Get access to healthcare services <br />
                            at all levels when you buy meals from us
                        </span>
                    </div>
                    <div className='ml-44 mt-12 bg-[#FADB21] pl-8 pt-7 pr-3 rounded-tl-2xl rounded-br-xl'>
                        <Image src={Breakfast} alt='' />
                    </div>
                </div>
            </div>
            {open && <PaymentModal open={open} close={() => setOpen(false)} />}
        </div>
    )
}

export default VerifyLoginPage