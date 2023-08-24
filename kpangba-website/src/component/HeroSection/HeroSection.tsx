'use client'
import React, { useState } from 'react'
import Image from "next/image";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from '@/assets';
// import Select from '../select/Select';
import { Location, User } from 'iconsax-react';
import CustomSelect from '../../widget/Select';
import { OptionProps } from '@/interface';
import DateSelect from '@/widget/DateSelect';
import TimePicker from 'react-time-picker';
import Link from 'next/link';

function HeroSection() {
  const [timeValue, setTimeValue] = useState('10:00');
  const optionsArr: OptionProps[] = [
    {
      label: "Ikeja",
      value: "Ikeja"
    },
    {
      label: "Gbagada",
      value: "Gbagada"
    },
    {
      label: "Ajah",
      value: "Ajah"
    },
    {
      label: "Yaba",
      value: "Yaba"
    },
    {
      label: "Lekki",
      value: "Lekki"
    }
  ]
  const [loaction, setLocation] = useState<OptionProps | null>(null)
  return (
    <div className='mt-[8rem] flex flex-col items-center justify-center z-10'>
      <div className='flex flex-col'>
        <div className='flex flex-col items-center justify-center text-[56px] text-[#302929] font-extrabold w-[48rem] mt-8'>
          <span>Your meals, secure</span>
          <span >quality
            <span className='bg-[#FCEA7D] ml-3 rounded-xl px-2'>
              healthcare service
            </span>
          </span>
        </div>
        <div className='flex flex-col items-center mt-8 justify-center text-xl font-normal'>
          <span>We help you solve out-of-pocket health expenses when you</span>
          <span>consistently buy meals from our mobile restaurants.</span>
        </div>
      </div>
      <div className='bg-[#FEF8D2] flex items-center justify-center text-center gap-4 border p-6 mt-16 border-[#D0B61B] w-[55rem] h-[6.5rem] rounded-3xl'>
        <div className='w-[10rem]'>
          <CustomSelect
            // hideDropDownIcon
            icon={<Location size="19" variant='Linear' color='#302929' />}
            className="!w-full cursor-pointer rounded-lg h-6"
            options={optionsArr}
            onChange={setLocation}
            label="Location"
            value={loaction}
          />
        </div>
        <div className='w-[6rem]'>
          <DateSelect
            className="items-center cursor-pointer rounded-lg !w-full h-12"
            placeholderText="Date"
          // selected={expiryDate}
          // onChange={(date) => {
          // setExpiryDate(date);
          // }}
          />
        </div>
        <div className='w-[10rem]'>
          <TimePicker
            // onChange={setTimeValue}
            value={timeValue}
            disableClock={true}
            clearIcon={null}
            className="bg-white cursor-pointer items-center focus:outline-none w-full border  p-[10px] rounded-lg" />
        </div>
        <div className='w-[15rem]'>
          <CustomSelect
            // hideDropDownIcon
            icon={<User size={19} variant='Linear' color='#302929' />}
            className="!w-full rounded-lg h-6"
            options={optionsArr}
            onChange={setLocation}
            label="Number of guest"
            value={loaction}
          />
        </div>
        <Link href="/reservation-result">
          <div className='w-[10rem] bg-[#2B5F2B] px-4 py-3 rounded-2xl'>
            <button className='text-white font-normal text-base'>Reserve</button>
          </div>
        </Link>
      </div>
      <div className='flex flex-row mt-[8rem] items-center justify-center gap-5'>
        <Image src={HeroImage1} alt="" width={248} height={217} className='rounded-xl' />
        <Image src={HeroImage2} alt="" width={283} height={259} className='rounded-xl' />
        <Image src={HeroImage3} alt="" width={326} height={294} className='rounded-xl' />
        <Image src={HeroImage4} alt="" width={293} height={372} className='rounded-xl' />
      </div>
    </div>
  )
}

export default HeroSection;
