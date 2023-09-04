"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import Image from "next/image";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from "@/assets";
// import Select from '../select/Select';
import { Location } from "iconsax-react";
import CustomSelect from "../../widget/Select";
import { OptionProps, RestaurantType } from "@/interface";
import DateSelect from "@/widget/DateSelect";
import { useRouter } from "next/navigation";
import PersonSelect from "@/widget/PersonSelect";
import { useAuth } from "@/context/AuthContext";
import ImageGallery from "../ImageCarousel";

interface HeroProps {
  loading: boolean;
  restuarants: RestaurantType[] | null;
  setLocation: Dispatch<SetStateAction<OptionProps | null>>;
  location: OptionProps | null;
}

function HeroSection({
  loading,
  restuarants,
  location,
  setLocation,
}: HeroProps) {
  const { reservationTime, handleTimeChange } = useAuth();
  const [error, setError] = useState<string | null>();
  const [isError, setIsError] = useState<boolean>(false);

  const validateTime = (time: string) => {
    const selectedDate = new Date(`2000-01-01T${time}`);
    const startHour = 8;
    const endHour = 18;

    return (
      selectedDate.getHours() >= startHour && selectedDate.getHours() < endHour
    );
  };

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

  const { setReservationDate, reservationDate } = useAuth();

  console.log(reservationDate);

  const router = useRouter();

  const handleClick = () => {
    typeof window !== "undefined" &&
      sessionStorage.setItem("restaurants", JSON.stringify(restuarants));
    router.push("/reservation-result");
  };
  return (
    <div className="mt-[6rem] flex flex-col items-center text-center justify-center z-10">
      <div className="flex flex-col items-center text-center justify-center">
        <div className="flex flex-col items-center justify-center text-xl leading-8 lg:text-[56px] text-[#302929] font-extrabold w-[19rem] lg:w-[48rem] mt-4 lg:mt-10">
          <p>Your meals, secure</p>
          <p className="lg:mt-14 mt-4">
            quality
            <span className="bg-[#FCEA7D] lg:ml-5 ml-4 p-1 rounded-xl px-2">
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
      <div className="bg-[#FEF8D2] w-full lg:flex lg:flex-row flex-col items-center justify-center text-center gap-4 border lg:p-6 px-2 py-6 mt-12 border-[#D0B61B] lg:h-[6.5rem] rounded-3xl">
        {/* Location and Date on mobile */}
        <div className="w-[100%] flex items-center gap-2 lg:gap-4">
          <div className="w-[50%]">
            <CustomSelect
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
              className="w-full lg:px-2 px-3 lg:py-2.5 py-6  rounded-lg"
              id="reservationTime"
              name="reservationTime"
              min="08:00"
              max="17:00"
              step="3600"
            />
          </div>
          <div className="w-[50%]">
            <PersonSelect />
          </div>
        </div>
        {/* Button */}
        <div className="w-[100%] lg:w-[25%] bg-[#2B5F2B] px-4 py-3 rounded-2xl">
          <button
            className="text-white font-normal text-base disabled:cursor-not-allowed disabled:opacity-50"
            onClick={handleClick}
            disabled={loading || isError || !restuarants?.length}
          >
            {loading ? (
              "loading..."
            ) : error ? (
              <p className="text-xs text-red-500">{error}</p>
            ) : restuarants?.length ? (
              `${restuarants?.length} Restuarants Available`
            ) : (
              `0 Restuarants Available`
            )}
          </button>
        </div>
      </div>

      <div className="flex w-full overflow-auto flex-row mt-[4rem] items-center justify-center gap-5">
        <ImageGallery />
      </div>
    </div>
  );
}

export default HeroSection;
