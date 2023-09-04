"use client";
import { RestaurantPic } from "@/assets";
import NavBar from "@/component/NavBar/NavBar";
import { useAuth } from "@/context/AuthContext";
import { OptionProps, RestaurantType } from "@/interface";
import { locationResult } from "@/json/StaticData";
import ResultCard from "@/utils/ResultCard";
import DateSelect from "@/widget/DateSelect";
import PersonSelect from "@/widget/PersonSelect";
import CustomSelect from "@/widget/Select";
import { Clock, Location, Star1, User } from "iconsax-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import TimePicker from "react-time-picker";

function ReservationResult() {
  const [restaurant, setRestaurant] = useState<RestaurantType[] | null>(null);
  const optionsArr: OptionProps[] = [
    {
      label: "Ikeja",
      value: "Ikeja",
    },
    {
      label: "Festac",
      value: "Festac",
    },
    {
      label: "Surulere",
      value: "Surulere",
    },
    {
      label: "Yaba",
      value: "Yaba",
    }
  ];
  const [error, setError] = useState<string | null>();
  const [isError, setIsError] = useState<boolean>(false);

  // const validateTime = (time: string) => {
  //   const selectedDate = new Date(`2023-09-01T${time}`);
  //   const startHour = 8;
  //   const endHour = 18;

  //   if (
  //     selectedDate.getHours() < startHour ||
  //     selectedDate.getHours() >= endHour
  //   ) {
  //     setError("Time must be between 8:00 AM and 6:00 PM");
  //     setIsError(true);
  //   } else {
  //     setError(null);
  //     setIsError(false);
  //   }
  // };
  const { reservationDate, setReservationDate, location, setLocation, reservationTime, handleTimeChange } =
    useAuth();

  const router = useRouter();

  const data =
    typeof window !== "undefined" && sessionStorage.getItem("restaurants");
  useEffect(() => {
    if (data) {
      setRestaurant(JSON.parse(data));
    } else {
      router.push("/");
    }
  }, []);
  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      <div className="bg-[#2B5F2B] flex mt-[8rem] py-5 lg:px-8 justify-center text-center items-center w-full  ">
        <div className="bg-[#FEF8D2] w-full lg:flex lg:flex-row flex-col items-center justify-center text-center gap-4 border lg:p-6 px-2 py-6  border-[#D0B61B] lg:h-[6.5rem] rounded-3xl">
          {/* Location and Date on mobile */}
          <div className="w-[100%] flex items-center gap-2 lg:gap-4">
            <div className="w-[50%]">
              <CustomSelect
                // hideDropDownIcon
                icon={<Location size="19" variant="Linear" color="#302929" />}
                className="!w-full cursor-pointer rounded-lg h-6"
                options={optionsArr}
                onChange={setLocation}
                label="Location"
                value={location}
              />
            </div>
            <div className="w-[50%]">
              <DateSelect
                className="items-center cursor-pointer rounded-lg !w-full h-12"
                placeholderText="Date"
                selected={reservationDate}
                onChange={(date) => {
                  setReservationDate(date);
                }}
                minDate={new Date()}
              />
            </div>
          </div>
          {/* Time and Guest on mobile */}
          <div className="w-[100%] mt-3 mb-4 flex items-center gap-2">
            <div className="w-[50%] relative">
              <input
                type="time"
                value={reservationTime}
                onChange={handleTimeChange}
                className="w-full lg:px-2 px-3 lg:py-2.5 py-6 rounded-lg"
                name=""
                id=""
              />
            </div>
            <div className="w-[50%]">
              <PersonSelect />
            </div>
          </div>
          <div className="w-[100%] lg:w-[25%] bg-[#2B5F2B] px-4 py-3 rounded-2xl">
            <Link href="/reservation-result">
              <button className="text-white font-normal text-base">
                Search
              </button>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex lg:flex-row flex-col px-6 lg:px-16 mt-2 gap-12 lg:gap-24 items-start text-start justify-start">
        <div className="first hidden mt-7 w-full lg:block flex-row lg:flex-col gap-2 lg:w-[9.6rem] ">
          <div className="bg-[#FEF8D2] lg:mb-3 mb-0 items-center text-center justify-center rounded-lg border border-[#D0B61B] lg:py-2 h-9 px-1">
            Filter
          </div>
          <div className="border"></div>
          <div>
            <span className="text-[#302929] flex items-center font-semibold text-sm lg:text-xl">
              Dining Option
            </span>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="lg:text-base text-sm font-normal text-[#302929]">
                Buffet
              </label>
            </div>
            <div className="mt-2 mb-6 flex gap-4">
              <input type="radio" />
              <label className="lg:text-base text-sm font-normal text-[#302929]">
                Delivery
              </label>
            </div>
          </div>
          <div className="border"></div>
          <div className="">
            <div className="text-[#302929] font-semibold text-sm lg:text-xl">Region</div>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="lg:text-base text-sm font-normal text-[#302929]">
                Island
              </label>
            </div>
            <div className="mt-2 flex gap-4">
              <input type="radio" />
              <label className="lg:text-base text-sm font-normal text-[#302929]">
                Mainland
              </label>
            </div>
          </div>
        </div>
        <div className="second flex flex-col gap-4 lg:w-[56.7rem] w-full">
          <p className="bg-[#FEF8D2] mt-5 mb-2 text-sm lg:text-2xl font-semibold text-[#302929] items-center text-center justify-center rounded-lg border border-[#D0B61B] lg:w-[28rem] w-full py-3">
            <strong>{restaurant?.length}</strong> Kpangba food on wheels in
            Lagos
          </p>
          <div className="border"></div>
          <div className="lg:w-[55rem] w-full rounded-xl shadow-lg lg:px-8 px-2 py-8 lg:py-12 flex flex-col lg:gap-8 gap-7 bg-white">
            {restaurant?.map((item, index) => (
              <ResultCard item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReservationResult;
