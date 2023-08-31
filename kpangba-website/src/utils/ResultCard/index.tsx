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
    <div className="flex cursor-pointer gap-3 text-start justify-start items-start rounded-xl border border-[#FDF3B5]  ">
      <div className="w-[16rem] h-[14rem]">
        <Image
          src={RestaurantPic}
          alt=""
          className="rounded-2xl object-cover w-full h-full"
        />
      </div>
      <div className="flex flex-col gap-3 ml-7 mt-8 text-[#302929]">
        <div className="flex gap-4 items-start justify-start text-left">
          <span className="text-2xl font-semibold">{item.resturant_name}</span>
          <div className="flex px-2 py-1 gap-2 items-center justify-center text-center bg-[#FEFAE1] rounded-xl">
            <Star1 variant="Bold" color="#D0B61C" size={20} />
            <span>{item.rating}</span>
          </div>
        </div>
        <span className="text-base font-normal w-[24rem]">
          Kfw Ikeja is located at {item.location_meta?.address}
        </span>
        <div className="flex gap-4">
          <span className="flex gap-4 p-2 items-center justify-center text-center bg-[#FEFAE1] rounded-3xl">
            <Clock size={20} />
            <span className="text-base font-normal p-2">
              {" "}
              {item.open_time} - {item.close_time}
            </span>
          </span>
          <div className="px-4 flex items-center justify-center text-center bg-[#FEFAE1] rounded-3xl">
            <span className="text-base font-normal">
              ₦{item.price_per_person.toLocaleString()}
            </span>
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
