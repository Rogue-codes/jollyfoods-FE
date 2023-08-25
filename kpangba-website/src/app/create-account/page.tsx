import { ArrowDown2, ArrowLeft } from 'iconsax-react'
import React from 'react'
import Image from 'next/image';
import { Breakfast, Logo } from '@/assets';
import Link from 'next/link';
import Select from '@/component/select/Select';
function CreateAccount() {
    const optionsArr = [
        "Nigerian Health Insurance",
        "Reliance Health",
        "Avon",
        "MyConvergenius",
        "AXA"
    ]
    return (
        <div className='flex flex-col bg-white w-full pt-6 px-32'>
            <Link href="/"> <div className='flex flex-row mt-3 gap-8 items-center'>
                <ArrowLeft />
                <span className='font-bold text-2xl'>Go Back</span>
            </div>
            </Link>
            <div className='flex flex-row w-[75.75] px-6 gap-10 h-[45.75] items-center text-center justify-center bg-white rounded-xl mt-11 border-2 shadow-xl'>
                <div className='bg-white text-left w-1/2 px-8'>
                    <div className='flex w-[8.7rem] items-center mt-6 text-center justify-center mb-4'>
                        <div className='w-full'>
                            <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
                        </div>
                        <span className='text-[20px] font-semibold'>Kpanbga</span>
                    </div>
                    <span className='text-[#302929] text-[32px] font-bold'>
                        Lets create your account
                    </span>
                    <form action="" className='mt-10'>
                        <div className='w-full text-left mb-3'>
                            <label className="block text-[#302929] text-base font-normal mb-2">
                                Full Name
                            </label>
                            <input className="border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] focus:outline-none text-base font-normal" type="text" placeholder="Full Name" />
                        </div>
                        <div className='w-full text-left mb-3'>
                            <label className="block text-[#302929] text-base font-normal mb-2">
                                Email
                            </label>
                            <input className="border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]" type="text" placeholder="email" />
                        </div>
                        <div className='w-full text-left mb-3'>
                            <label className="block text-[#302929] text-base font-normal mb-2">
                                Phone Number
                            </label>
                            <input className=" border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]" type="text" placeholder="Phone Number" />
                        </div>
                        <div className='w-full text-left mb-3'>
                            <label className="block text-[#302929] text-base font-normal mb-2">
                                Password
                            </label>
                            <input className="border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]" type="text" placeholder="Password" />
                        </div>
                        <div className='w-full text-left mb-3'>
                            <label className="block text-[#302929] text-base font-normal mb-2">
                                Confirm Password
                            </label>
                            <input className=" border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]" type="text" placeholder="Confirm Password" />
                        </div>
                        <Select options={optionsArr} icon={<ArrowDown2 />} />
                        <div className='flex gap-4 my-3'>
                            <input
                                type="checkbox"
                                className="w-5 h-5  accent-[#2B5F2B] cursor-pointer rounded-lg"
                                id="checkbox"
                            />
                            <span className='text-[#302929] font-normal text-base'>
                                By clicking you agree to Kpangba terms and policies
                            </span>
                        </div>
                        <button type="submit" className='bg-[#2B5F2B] mb-5 mt-3 text-[#ffff] w-full py-3 rounded-3xl font-normal text-base'>Create Account</button>
                    </form>
                </div>
                <div className='bg-[#2B5F2B] mr-4 pl-14 rounded-xl flex flex-col items-start text-start justify-start w-1/2'>
                    <div className='flex flex-col mt-16 text-left'>
                        <span className='text-[#fff] text-[28px] font-semibold'>
                            Helping users solve <br />
                            out-of-pocket health <br />
                            expenditure
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
        </div>
    )
}

export default CreateAccount