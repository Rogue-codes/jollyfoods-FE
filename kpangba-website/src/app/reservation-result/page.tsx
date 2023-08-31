"use client";
import { RestaurantPic } from "@/assets";
import NavBar from "@/component/NavBar/NavBar";
import { OptionProps, RestaurantType } from "@/interface";
import { locationResult } from "@/json/StaticData";
import ResultCard from "@/utils/ResultCard";
import DateSelect from "@/widget/DateSelect";
import CustomSelect from "@/widget/Select";
import { Clock, Location, Star1, User } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TimePicker from "react-time-picker";

function ReservationResult() {
  const [timeValue, setTimeValue] = useState("10:00");
  const [loaction, setLocation] = useState<OptionProps | null>(null);
  const [restaurant, setRestaurant] = useState<RestaurantType[] | null>(null);
  const optionsArr: OptionProps[] = [
    {
      label: "Ikeja",
      value: "Ikeja",
    },
    {
      label: "Gbagada",
      value: "Gbagada",
    },
    {
      label: "Ajah",
      value: "Ajah",
    },
    {
      label: "Yaba",
      value: "Yaba",
    },
    {
      label: "Lekki",
      value: "Lekki",
    },
  ];

  const router = useRouter()

  const data = typeof window !== "undefined" && sessionStorage.getItem("restaurants");
  useEffect(() => {
    if (data) {
      setRestaurant(JSON.parse(data));
    }else{
      router.push('/')
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="bg-[#2B5F2B] flex mt-[8rem] py-5 justify-center text-center items-center w-full  ">
        <div className="bg-[#FEF8D2] flex items-center justify-center text-center gap-4 border p-6  border-[#D0B61B] w-[55rem] h-[6.5rem] rounded-3xl">
          <div className="w-[10rem]">
            <CustomSelect
              // hideDropDownIcon
              icon={<Location size="19" variant="Linear" color="#302929" />}
              className="!w-full cursor-pointer rounded-lg h-6"
              options={optionsArr}
              onChange={setLocation}
              label="Location"
              value={loaction}
            />
          </div>
          <div className="w-[6rem]">
            <DateSelect
              className="items-center cursor-pointer rounded-lg !w-full h-12"
              placeholderText="Date"
              // selected={expiryDate}
              // onChange={(date) => {
              // setExpiryDate(date);
              // }}
            />
          </div>
          <div className="w-[10rem]">
            <TimePicker
              // onChange={setTimeValue}
              value={timeValue}
              disableClock={true}
              clearIcon={null}
              className="bg-white cursor-pointer items-center focus:outline-none w-full border  p-[10px] rounded-lg"
            />
          </div>
          <div className="w-[15rem]">
            <CustomSelect
              // hideDropDownIcon
              icon={<User size={19} variant="Linear" color="#302929" />}
              className="!w-full rounded-lg h-6"
              options={optionsArr}
              onChange={setLocation}
              label="Number of guest"
              value={loaction}
            />
          </div>
          <div className="w-[10rem] bg-[#2B5F2B] px-4 py-3 rounded-2xl">
            <Link href="/reservation-result">
              <button className="text-white font-normal text-base">
                Reserve
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex px-16 mt-2 gap-24 items-start text-start justify-center">
        <div className="first flex flex-col gap-4 w-[9.6rem] ">
          <span className="bg-[#FEF8D2] mt-5 mb-3 items-center text-center justify-center rounded-lg border border-[#D0B61B] w-14 py-3 px-2">
            Filter
          </span>
          <div className="border"></div>
          <div>
            <span className="text-[#302929] font-semibold text-xl">
              Dining Option
            </span>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="text-base font-normal text-[#302929]">
                Buffet
              </label>
            </div>
            <div className="mt-2 mb-6 flex gap-4">
              <input type="radio" />
              <label className="text-base font-normal text-[#302929]">
                Delivery
              </label>
            </div>
          </div>
          <div className="border"></div>
          <div className="mt-6">
            <span className="text-[#302929] font-semibold text-xl">Region</span>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="text-base font-normal text-[#302929]">
                Island
              </label>
            </div>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="text-base font-normal text-[#302929]">
                Mainland
              </label>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[56.7rem] ">
          <p className="bg-[#FEF8D2] mt-5 mb-2 items-center text-center justify-center rounded-lg border border-[#D0B61B] w-[21rem] py-3">
            <strong>{restaurant?.length}</strong> Kpangba food on wheels in Lagos
          </p>
          <div className="border"></div>
          <div className="w-[55rem] rounded-xl shadow-lg px-8 py-12 flex flex-col gap-8 bg-white">
            {restaurant?.map((item, index) => (
              <ResultCard item={item} key={index}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationResult;
