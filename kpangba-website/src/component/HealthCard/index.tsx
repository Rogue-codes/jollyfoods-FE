import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';
import ReuseableCard2 from '@/utils/ReuseableCard2';
import { Card1 } from '@/assets';

function HealthCard() {
  const [cardRef, cardInView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  });

  const [imageRef, imageInView] = useInView({
    triggerOnce: true,
    threshold: 0.9
  });

  return (
    <div className='flex lg:flex-row flex-col lg:gap-4 gap-6 lg:mt-[8rem] mt-[3rem] items-center justify-center mx-3'>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, x: -50 }} // Initial animation state
        animate={cardInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
        transition={{ duration: 1 }} // Animation duration
      >
        <ReuseableCard2 />
      </motion.div>
      <motion.div
        ref={imageRef}
        initial={{ opacity: 0, x: 50 }} // Initial animation state
        animate={imageInView ? { opacity: 1, x: 0 } : {}} // Animate when in view
        transition={{ duration: 1 }} // Animation duration
      >
        <div className='bg-[#FCEA7D] lg:px-7 py-10 lg:py-[22px] rounded-3xl'>
          <Image src={Card1} width={552} height={412} alt='' />
        </div>
      </motion.div>
    </div>
  );
}

export default HealthCard;
