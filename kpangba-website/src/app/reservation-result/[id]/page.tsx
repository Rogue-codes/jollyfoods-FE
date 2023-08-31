"use client";
import { RestaurantPic } from "@/assets";
import BreakFastList from "@/component/FoodMenuList/LunchList";
import NavBar from "@/component/NavBar/NavBar";
import LunchList from "@/component/FoodMenuList/LunchList";
import DinnerList from "@/component/FoodMenuList/DinnerList";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Clock, Location, Star1, User } from "iconsax-react";
import Link from "next/link";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { RestaurantType } from "@/interface";
import MenuTab from "@/component/menuTab";

interface PageProps {
  params: { id: string };
}
export default function Resturant({ params }: PageProps) {

  const [loading, setLoading] = useState<boolean>(false);
  const [result,setResult] = useState<RestaurantType>()

  // make API call of fetch restuurant based on ID
  const fetchRestaurant = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.get(`/resturant/${params.id}`);
      setLoading(false);
      setResult(res?.data?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchRestaurant();
  }, []);

  console.log(result)

  const [activeTab,setActiveTab] = useState(0)

  let menuContent;

  if (activeTab === 0) {
    menuContent = <BreakFastList activeTab={activeTab} tabOptions={result?.menu} />;
  } else if (activeTab === 1) {
    menuContent = <DinnerList activeTab={activeTab} tabOptions={result?.menu} />;
  } else {
    menuContent = <DinnerList activeTab={activeTab} tabOptions={result?.menu} />;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="section1 mt-[8rem] px-16 flex flex-col items-start justify-start text-start">
          <p className="text-[#302929] font-semibold text-xl mb-6">
            {result?.resturant_name}
          </p>
          <div className="flex gap-16 items-center text-center justify-center">
            <div className="flex gap-2 items-center text-center justify-center bg-[#FEFAE1] p-2 rounded-xl">
              <Star1 variant="Bold" color="#D0B61C" size="20" />
              <span className="text-[#302929] font-normal text-base">{result?.rating}</span>
            </div>
            <div className="flex gap-4 items-center text-center justify-center">
              <Location variant="Linear" color="#302929" size="20" />
              <span className="text-[#302929] font-normal text-base">
                {result?.location_meta?.address}
              </span>
            </div>
          </div>
          <div className="gap-3 mt-10 w-[74rem] items-center justify-center text-center flex flex-row">
            <div className=" w-[36.75rem] h-[14.9rem] ">
              <Image
                src={RestaurantPic}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[36.75rem] h-[14.9rem]">
              <Image
                src={RestaurantPic}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="flex justify-between gap-80 mt-10 w-full">
            <div className="">
              <p className="text-[#302929] font-semibold text-3xl">
                Today’s Menu
              </p>
              <MenuTab activeTab={activeTab} setActiveTab={setActiveTab} tabOptions={result?.menu}/>
              <div className="absolute z-20">{menuContent}</div>
            </div>
            <div className="w-[25rem] h-[20rem] mt-8 pl-8 flex flex-col items-start text-start justify-start border border-[#E2E9E2] bg-white rounded-2xl">
              <span className="font-semibold mt-10 text-xl text-[#302929]">
                N9,600
                <span className="font-normal ml-3 text-base text-[#302929]">
                  per Buffets
                </span>
              </span>
              <div className="flex mt-8 w-full items-start justify-start gap-32 text-start">
                <div className="font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center">
                  <User variant="Linear" size="20px" color="#302929" />
                  <span>1 Person</span>
                </div>
                <div className="font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center">
                  <Clock variant="Linear" size="20px" color="#302929" />
                  <span> 06:00PM</span>
                </div>
              </div>
              <div className="mt-8 w-[10rem]">
                <select className="w-full rounded-lg p-2 bg-[#FEFAE1]">
                  <option value="">Breakfast</option>
                  <option value="">Lunch</option>
                  <option value="">Dinner</option>
                </select>
              </div>
              <Link href="/create-account">
                <button className="bg-[#2B5F2B] w-[17rem] mt-8 text-white font-normla text-xl rounded-3xl py-3 px-4 cursor-pointer">
                  Continue to checkout
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
