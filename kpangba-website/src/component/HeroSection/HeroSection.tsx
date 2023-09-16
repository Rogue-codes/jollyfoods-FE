import React from "react";

import ImageGallery from "../ImageCarousel";


function HeroSection() {
  
  return (
    <div className="mt-[6rem] flex flex-col items-center text-center justify-center z-10">
      <div className="flex flex-col items-center text-center justify-center">
        <div className="flex flex-col items-center justify-center text-3xl leading-[48px] lg:leading-8 lg:text-[56px] text-[#302929] font-extrabold w-[19rem] lg:w-[48rem] mt-4 lg:mt-10">
          <p>Your meals, secure</p>
          <p className="lg:mt-14 mt-4">
            quality
            <span className="bg-[#FCEA7D] block lg:inline lg:ml-5 ml-4 p-1 rounded-xl px-2">
              healthcare service
            </span>
          </p>
        </div>
        <div className="lg:flex hidden flex-col items-center mt-12 justify-center text-xl font-normal">
          <span>We help you solve out-of-pocket health expenses when you</span>
          <span>consistently buy meals from our mobile restaurants.</span>
        </div>
        <div className="flex lg:hidden items-center w-[24rem] mt-8 justify-center text-base font-normal">
          <span>Your first meal secures your health.</span>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
