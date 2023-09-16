import React from "react";
import Image from "next/image";
import Link from "next/link";
import { RestaurantType } from "@/interface";
import { Clock, Star, Star1, Timer } from "iconsax-react";
import { RestaurantPic } from "@/assets";
import { useRouter } from "next/navigation";

interface containerProps {
  item: RestaurantType;
}
function ResultCard({ item }: containerProps) {
  const router = useRouter();
  return (
    <div className="flex lg:flex-row w-full flex-col cursor-pointer gap-3 text-start justify-start items-start rounded-xl border border-[#FDF3B5]  ">
      <div className="w-[16rem] h-[14rem]">
        <Image
          src={RestaurantPic}
          alt=""
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3 lg:ml-7 ml-3 lg:mt-8 mt-4 text-[#302929]">
        <div className="flex lg:gap-4 gap-2 items-start justify-start text-left">
          <span className="lg:text-2xl text-base font-semibold">{item.resturant_name}</span>
          <div className="flex px-2 py-1 gap-2 items-center justify-center text-center bg-[#FEFAE1] rounded-xl">
            <Star1 variant="Bold" color="#D0B61C" size={20} />
            <span>{item.rating}</span>
          </div>
        </div>
        <span className="lg:text-base text-sm font-normal lg:w-[30rem] w-[15rem]">
          {item.location_meta?.address}
        </span>
        <div className="flex flex-wrap mb-4 lg-mb-0 lg:gap-4 gap-3">
          <div className="flex gap-4 lg:p-2 p-1 items-center justify-center text-center bg-[#FEFAE1] rounded-3xl">
           <div><Clock size={20} /></div> 
            <div className="lg:text-base text-sm font-normal p-2">
              {" "}
              {item.open_time} - {item.close_time}
            </div>
          </div>
          <div className="px-4 flex items-center justify-center text-center bg-[#FEFAE1] rounded-3xl">
            <div className="text-base font-normal">
              ₦{item.price_per_adult.toLocaleString()}
            </div>
          </div>
          <button
            className="bg-[#2B5F2B] py-4 px-5 text-base font-normal text-white rounded-2xl"
            onClick={() => router.push(`/reservation-result/${item._id}`)}
          >
            continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default ResultCard;
