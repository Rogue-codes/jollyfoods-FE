import React from 'react'
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import { AXA, AvonC, NigerianHealthInsurance, RelianceHMO, myCoverginus } from '@/assets';
import { motion } from 'framer-motion';

function HealthPartners() {
    const [healthRef, healthInView] = useInView({
        triggerOnce: true,
        threshold: 0.9
    });
    const images = [
        { src: NigerianHealthInsurance, name: "Landa" },
        { src: RelianceHMO, name: "Gurudemy" },
        { src: AXA, name: "Howbury" },
        { src: myCoverginus, name: "Institute" },
        { src: AvonC, name: "JSAID" },
    ];
    return (
        <div className='flex flex-col items-center pt-2 text-center justify-center mt-10 lg:mt-16'>
            <div className='flex flex-col w-full gap-3 items-center text-center justify-center'>
             <div className='flex flex-col font-bold lg:text-[40px] text-lg text-[#302929]'>
                <h2 className=''>
                    Easily access 
                </h2>
                <span className='lg:mt-5 mt-0'>quality healthcare</span></div>   
                <span className='lg:text-base text-xs lg:mt-4 mt-2 w-full lg:w-[30rem] font-normal'>
                    We have partnered with top health service companies to give 
                    you access to quality healthcare.
                </span>
            </div>
            <motion.div
                ref={healthRef}
                initial={{ opacity: 0, y: -50 }}
                animate={healthInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1 }}
            >
                <div className='mt-16 overflow-x-auto lg:pr-0 pr-4 pl-[12rem] lg:pl-0 scrollbar-none gap-4 lg:gap-14 flex items-center text-center justify-center'>
                    {images.map((item, index) => (
                        <Image
                            key={index}
                            src={item.src}
                            alt=""
                            className="cursor-pointer"
                            width={100}
                            height={100}
                        />
                    ))}
                </div>
            </motion.div>
        </div>
    )
}

export default HealthPartners