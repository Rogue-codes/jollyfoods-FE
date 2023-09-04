import ReuseableCard3 from '@/utils/ReuseableCard3'
import React from 'react'
import { royaltyData } from '@/json/StaticData'
import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';

function Royalty() {
    const [loyaltyRef, loyaltyInView] = useInView({
        triggerOnce: true,
        threshold: 0.9
    });
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
            <motion.div
                ref={loyaltyRef}
                initial={{ opacity: 0, y: -50 }} // Initial animation state
                animate={loyaltyInView ? { opacity: 1, y: 0 } : {}} // Animate when in view
                transition={{ duration: 1 }} // Animation duration
            >
                <div className='flex lg:flex-row flex-col mt-[3rem]'>
                    {royaltyData.map((item, index) => (
                        <ReuseableCard3 key={index} text1={item.name} text2={item.subname} text3={item.reward1} text4={item.reward2} text5={item.reward3} />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default Royalty