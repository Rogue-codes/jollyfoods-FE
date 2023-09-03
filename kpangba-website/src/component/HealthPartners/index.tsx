import React from 'react'
 
import Image from 'next/image';
import { AXA, AvonC, NigerianHealthInsurance, RelianceHMO, myCoverginus } from '@/assets';
function HealthPartners () {
    const images = [
        { src: NigerianHealthInsurance, name: "Landa" },
        { src: RelianceHMO, name: "Gurudemy" },
        { src: AXA, name: "Howbury" },
        { src: myCoverginus, name: "Institute" },
        { src: AvonC, name: "JSAID" }, 
    ];
    return (
        <div className='flex flex-col items-center text-center justify-center mt-10 lg:mt-16'>
            <div className='flex flex-col gap-3 items-center text-center justify-center'>
                <h2 className='font-bold lg:text-[40px] text-lg text-[#302929]'>
                    Easily access <br />
                    quality healthcare
                </h2>
                <span className='lg:text-base text-xs w-[17rem] font-normal'>
                    We have partnered with top health service companies to give <br />
                    you access to quality healthcare.
                </span>
            </div>
            <div className='mt-16 overflow-x-auto lg:pr-0 pr-4 pl-6 lg:pl-0 scrollbar-none gap-6 lg:gap-14 flex items-center text-center justify-center'>
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
        </div>
    )
}

export default HealthPartners