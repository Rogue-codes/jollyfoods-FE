"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from "@/assets";
// import Select from '../select/Select';
import { Location, Timer1, User } from "iconsax-react";
import CustomSelect from "../../widget/Select";
import { OptionProps, RestaurantType } from "@/interface";
import DateSelect from "@/widget/DateSelect";
import TimePicker from "react-time-picker";
import Link from "next/link";
import { AM_PM, hourArr, minutesArr } from "@/utils";
import Select from "../select/Select";
import { useRouter } from "next/navigation";
import PersonSelect from "@/widget/PersonSelect";

interface HeroProps {
  loading: boolean;
  restuarants: RestaurantType[] | null;
}

function HeroSection({ loading, restuarants }: HeroProps) {
  const getCurrentPeriod = () => {
    const now = new Date();
    return now.getHours() >= 12 ? "PM" : "AM";
  };

  const [currentHour, setCurrentHour] = useState<string>(
    String(new Date().getHours()).padStart(2, "0")
  );
  const [currentMinute, setCurrentMinute] = useState<string>(
    String(new Date().getMinutes()).padStart(2, "0")
  );
  const [currentPeriod, setCurrentPeriod] = useState<string>(
    getCurrentPeriod()
  );

  const [showDropDown, setShowDropDown] = useState<boolean>(false);

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

  const [time, setTime] = useState<string>();


  const [location, setLocation] = useState<OptionProps | null>(null);
  const [numOfGuest, setNumOfGuest] = useState<number>(1);
  const guestArr = ["1", "2", "3", "4", "5", "6", "7", "8"];
  const [reservationDate,setReservationDate] = useState<Date | null>(new Date())

  console.log(reservationDate)

  const router = useRouter();

  const handleClick = () => {
    typeof window !== "undefined" && sessionStorage.setItem("restaurants", JSON.stringify(restuarants));
    router.push("/reservation-result");
  };
  return (
    <div className="mt-[8rem] flex flex-col items-center justify-center z-10">
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center text-[56px] text-[#302929] font-extrabold w-[48rem] mt-8">
          <span>Your meals, secure</span>
          <span>
            quality
            <span className="bg-[#FCEA7D] ml-3 rounded-xl px-2">
              healthcare service
            </span>
          </span>
        </div>
        <div className="flex flex-col items-center mt-8 justify-center text-xl font-normal">
          <span>We help you solve out-of-pocket health expenses when you</span>
          <span>consistently buy meals from our mobile restaurants.</span>
        </div>
      </div>
      <div className="bg-[#FEF8D2] flex items-center justify-center text-center gap-4 border p-6 mt-16 border-[#D0B61B] w-[65rem] h-[6.5rem] rounded-3xl">
        <div className="w-[23%]">
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
        <div className="w-[18%]">
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
        <div className="w-[15%] relative">
          {/* <div
            className="w-full bg-white rounded-lg py-3 flex justify-center gap-3 items-center cursor-pointer"
            onClick={() => setShowDropDown(!showDropDown)}
          >
            <Timer1 />
            <p>
              {currentHour}:{currentMinute} {currentPeriod}
            </p>
          </div>
          {showDropDown && (
            <div
              className="absolute flex left-0 top-12 w-full h-44 border"
              onBlur={() => setShowDropDown(false)}
            >
              <div className="hide_overflow w-[33%] h-full border-r bg-white overflow-y-auto">
                {hourArr.map((hr, _) => (
                  <p
                    key={_}
                    className={`${
                      currentHour === hr
                        ? "bg-[#2B5F2B] text-white hover:bg-[#2B5F2B]"
                        : "bg-white hover:bg-[#FEF8D2]"
                    } ${
                      parseInt(hour_now) + 1 > parseInt(hr) ? "disabled" : ""
                    } p-2 cursor-pointer`}
                    onClick={() =>
                      parseInt(hour_now) <= parseInt(hr) && setHour(hr)
                    }
                  >
                    {hr}
                  </p>
                ))}
              </div>
              <div className="hide_overflow overflow-y-scroll w-[33%] h-full border-r bg-white">
                {minutesArr.map((min, _) => (
                  <p
                    key={_}
                    className={`${
                      currentMinute === min
                        ? "bg-[#2B5F2B] text-white hover:bg-[#2B5F2B]"
                        : "bg-white hover:bg-[#FEF8D2]"
                    } p-2 cursor-pointer`}
                    onClick={() => setMinute(min)}
                  >
                    {min}
                  </p>
                ))}
              </div>
              <div className="w-[33%] h-full  bg-white">
                {AM_PM.map((am_pm, _) => (
                  <p
                    key={_}
                    className="p-2 hover:bg-[#FEF8D2] cursor-pointer"
                    onClick={() => setCurrentPeriod(am_pm)}
                  >
                    {am_pm}
                  </p>
                ))}
                <button
                  className="p-2 bg-[#2B5F2B] text-white rounded-lg"
                  onClick={() => setShowDropDown(false)}
                >
                  OK
                </button>
              </div>
            </div>
          )} */}
          <input type="time" value={time} onChange={(e)=>setTime(e.target.value)} className="w-full p-2 rounded-lg" name="" id="" />
        </div>
        <div className="w-[30%]">
        <PersonSelect/>
        </div>
        <div className="w-[25%] bg-[#2B5F2B] px-4 py-3 rounded-2xl">
          <button
            className="text-white font-normal text-base disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleClick}
            disabled={loading}
          >
            {loading
              ? "loading..."
              : restuarants?.length ? `${restuarants?.length} Restuarants Available` : `network error`}
          </button>
        </div>
      </div>
      <div className="flex flex-row mt-[8rem] items-center justify-center gap-5">
        <Image
          src={HeroImage1}
          alt=""
          width={248}
          height={217}
          className="rounded-xl"
        />
        <Image
          src={HeroImage2}
          alt=""
          width={283}
          height={259}
          className="rounded-xl"
        />
        <Image
          src={HeroImage3}
          alt=""
          width={326}
          height={294}
          className="rounded-xl"
        />
        <Image
          src={HeroImage4}
          alt=""
          width={293}
          height={372}
          className="rounded-xl"
        />
      </div>
    </div>
  );
}

export default HeroSection;
