'use client'
import NavBar from '@/component/NavBar/NavBar'
import { Clock, Location, Star1, User } from 'iconsax-react'
import React, { useState } from 'react';
import Image from 'next/image';
import { RestaurantPic } from '@/assets';
import LunchList from '@/component/FoodMenuList/LunchList';
import DinnerList from '@/component/FoodMenuList/DinnerList';
import BreakFastList from '@/component/FoodMenuList/BreakFastList';
import PaymentModal from '@/component/PaymentModal';
import Backdrop from '@/widget/modal/Backdrop';

function FoodMenu() {
    const [menuList, setMenuList] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false)
    const openPaymentModal = () => {
        setOpen(true);
        console.log("clicked");
    }
    const SwitchTab = (index: number) => {
        setMenuList(index)
    }

    let menuContent;

    if (menuList === 0) {
        menuContent = <BreakFastList />;
    } else if (menuList === 1) {
        menuContent = <LunchList />;
    } else {
        menuContent = <DinnerList />;
    }

    return (
        <div className='flex min-h-screen flex-col'>
            <NavBar />
            <div className='section1 mt-[8rem] px-16 flex flex-col items-start justify-start text-start'>
                <span className='text-[#302929] font-semibold text-xl mb-6'>
                    Kpangba food on wheels Ikeja
                </span>
                <div className='flex gap-16 items-center text-center justify-center'>
                    <div className="flex gap-2 items-center text-center justify-center bg-[#FEFAE1] p-2 rounded-xl">
                        <Star1 variant='Bold' color='#D0B61C' size="20" />
                        <span className='text-[#302929] font-normal text-base'>4.0</span>
                    </div>
                    <div className="flex gap-4 items-center text-center justify-center">
                        <Location variant='Linear' color='#302929' size="20" />
                        <span className='text-[#302929] font-normal text-base'>
                            Fajuyi way, Ikeja Lagos
                        </span>
                    </div>

                </div>
                <div className='gap-3 mt-10 w-[74rem] items-center justify-center text-center flex flex-row'>
                    <div className=' w-[36.75rem] h-[14.9rem] '>
                        <Image src={RestaurantPic} alt='' className='w-full h-full object-cover rounded-xl' />
                    </div>
                    <div className='w-[36.75rem] h-[14.9rem]'>
                        <Image src={RestaurantPic} alt='' className='w-full h-full rounded-xl object-cover' />
                    </div>
                </div>
                <div className='flex gap-80 mt-10 w-full'>
                    <div className=''>
                        <span className='text-[#302929] font-semibold text-3xl'>
                            Today’s Menu
                        </span>
                        <div className='border-b-2 relative cursor-pointer mb-6 border-[#E2E9E2] flex mt-8 items-center text-center justify-center gap-14'>
                            <span className='text-[#302929] border-b-2 border-[#FADB21] p-2 font-semibold text-xl' onClick={() => SwitchTab(0)}>
                                Breakast
                            </span>
                            <span className='text-[#302929] p-2 font-semibold text-xl hover:border-b-2 hover:border-[#FADB21]' onClick={() => SwitchTab(1)}>
                                Lunch
                            </span>
                            <span className='text-[#302929] p-2 font-semibold text-xl hover:border-b-2 hover:border-[#FADB21]' onClick={() => SwitchTab(2)}>
                                Dinner
                            </span>
                        </div>
                        <div className='absolute z-20'>{menuContent}</div>
                    </div>
                    <div className='Right w-[25rem] h-[20rem] pl-8 flex flex-col items-start text-start justify-start border border-[#E2E9E2] bg-white rounded-2xl'>
                        <span className='font-semibold mt-10 text-xl text-[#302929]'>
                            N9,600
                            <span className='font-normal ml-3 text-base text-[#302929]'>
                                per Buffets
                            </span>
                        </span>
                        <div className='flex mt-8 w-full items-start justify-start gap-32 text-start'>
                            <div className='font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center'>
                                <User variant='Linear' size="20px" color='#302929' />
                                <span>1 Person</span>
                            </div>
                            <div className='font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center'>
                                <Clock variant='Linear' size="20px" color='#302929' />
                                <span> 06:00PM</span>
                            </div>
                        </div>
                        <div className='mt-8 w-[10rem]'>
                            <select className='w-full rounded-lg p-2 bg-[#FEFAE1]'>
                                <option value="">Breakfast</option>
                                <option value="">Lunch</option>
                                <option value="">Dinner</option>
                            </select>
                        </div>
                        <button className='bg-[#2B5F2B] w-[17rem] mt-8 text-white font-normla text-xl rounded-3xl p-4 cursor-pointer' onClick={openPaymentModal}>
                            Continue to checkout
                        </button>
                    </div>
                </div>
            </div>
            {open && <PaymentModal open={open} close={() => setOpen(false)} />}
        </div>
    )
}

export default FoodMenu