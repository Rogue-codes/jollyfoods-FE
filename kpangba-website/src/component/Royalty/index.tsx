import ReuseableCard3 from '@/utils/ReuseableCard3'
import React from 'react'
import { royaltyData } from '@/json/StaticData'

function Royalty() {
   
    return (
        <div className='flex flex-col w-full lg:mt-[5rem] mt-[3rem] justify-center items-center text-center bg-gradient-to-t from-[#FDF3B5] to-[#E8EDE8]'>
            <div className='flex flex-col justify-center items-center text-center gap-5'>
                <h2 className='font-bold text-[#302929] lg:text-[40px] text-xl mt-10'>
                    Get rewarded for loyalty
                </h2>
                <span className='font-normal lg:text-base text-xs '>
                    Points are attached to every meal you order from us. The more you order from us, the higher you chances of <br />
                    benefiting more from our healthcare insurance
                </span>
            </div>
           
                <div className='flex lg:flex-row flex-col mt-[3rem]'>
                    {royaltyData.map((item, index) => (
                        <ReuseableCard3 key={index} text1={item.name} text2={item.subname} text3={item.reward1} text4={item.reward2} text5={item.reward3} />
                    ))}
                </div>
             
        </div>
    )
}

export default Royalty