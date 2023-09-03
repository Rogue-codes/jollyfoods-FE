import ReuseableCard1 from '@/utils/ReuseableCard1';
import React from 'react'
import { popularMeals } from '@/json/StaticData';
import { JollofRice } from '@/assets';
import { Star1 } from 'iconsax-react';

function PopularLocation() {

    return (
        <div className='flex lg:mt-[7rem] mx-4 mt-14 flex-col items-center justify-center'>
            <h2 className='text-[#302929] lg:text-[40px] mb-4 text-lg font-bold'>
                Popular locations
            </h2>
            <div className='flex lg:flex-col text-center items-center justify-center flex-row w-full overflow-x-auto scrollbar-none'>
                <div className='lg:ml-0 ml-[11rem]'>
                    <div className='flex lg:gap-5 gap-3 mt-2 lg:mt-10 pb-6 pt-4 px-2 lg:px-8 w-[60rem] flex-row'>
                        {popularMeals.slice(0, 2).map((item, index) => (
                            <ReuseableCard1 key={index} text1={item.name} text2={item.subname} text3={item.number} img={JollofRice} icon={<Star1 variant='Bold' size="1.2em" color='#D0B61C' />} />
                        ))}
                    </div>
                </div>
                <div className='flex lg:gap-5 gap-3 px-8 py-5  w-[60rem] flex-row'>
                    {popularMeals.slice(2).map((item, index) => (
                        <ReuseableCard1 key={index} text1={item.name} text2={item.subname} text3={item.number} img={JollofRice} icon={<Star1 variant='Bold' size="1.2em" color='#D0B61C' />} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PopularLocation;