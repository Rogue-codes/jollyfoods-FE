import ReuseableCard1 from '@/utils/ReuseableCard1';
import React from 'react'
import { popularMeals } from '@/json/StaticData';
import { JollofRice } from '@/assets';
import { Star1 } from 'iconsax-react';

function PopularLocation() {

    return (
        <div className='flex mt-[8rem] flex-col items-center justify-center'>
            <h2 className='text-[#302929] text-[40px] font-bold'>Popular locations</h2>
            <div className='flex gap-5 mt-10 p-8 w-[60rem] flex-row'>
                {popularMeals.slice(0, 2).map((item, index) => (
                    <ReuseableCard1 key={index} text1={item.name} text2={item.subname} text3={item.number} img={JollofRice} icon={<Star1 variant='Bold' size="1.2em" color='#D0B61C' />} />
                ))}
            </div>
            <div className='flex gap-5 px-8 py-5  w-[60rem] flex-row'>
                {popularMeals.slice(2).map((item, index) => (
                    <ReuseableCard1 key={index} text1={item.name} text2={item.subname} text3={item.number} img={JollofRice} icon={<Star1 variant='Bold' size="1.2em" color='#D0B61C' />} />
                ))}
            </div>
        </div>
    )
}

export default PopularLocation;