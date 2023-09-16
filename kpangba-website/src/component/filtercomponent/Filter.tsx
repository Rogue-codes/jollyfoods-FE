'use client'
import { useAuth } from '@/context/AuthContext';
import { RestaurantType } from '@/interface';
import DateSelect from '@/widget/DateSelect';
import PersonSelect from '@/widget/PersonSelect';
import CustomSelect from '@/widget/Select';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react'

interface HeroProps {
  loading: boolean;
  restuarants: RestaurantType[] | null;
  allResturants: RestaurantType[] | null
}

export default function Filter({
  loading,
  restuarants,
  allResturants
}: HeroProps) {
  const { reservationTime, handleTimeChange,OptionsArr, location,setLocation } = useAuth();
  const [error, setError] = useState<string | null>();
  const [isError, setIsError] = useState<boolean>(false);


  const { setReservationDate, reservationDate } = useAuth();

  const router = useRouter();

  const handleClick = () => {
    typeof window !== "undefined" &&
      sessionStorage.setItem("restaurants", JSON.stringify(allResturants));
    router.push("/reservation-result");
  };
  return (
    <div className="bg-[#FEF8D2] w-full lg:w-[90%] mx-auto flex lg:flex-row flex-wrap lg:flex-nowrap items-center justify-center text-center gap-4 border lg:p-6 px-2 py-6 mt-12 border-[#D0B61B] lg:h-[6.5rem] rounded-3xl">
    {/* Location and Date on mobile */}
      <div className="w-[45%] p-[10px] rounded-lg  bg-white lg:w-[40%]">
        <CustomSelect label='location' value={location} onChange={(e:any)=>setLocation(e)} options={OptionsArr}/>
      </div>
      <div className="w-[45%] lg:w-[30%]">
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
    {/* Time and Guest on mobile */}
    <div className="w-[45%] lg:w-[30%] mt-3 mb-4 flex items-center gap-2">
        <input
          type="time"
          value={reservationTime}
          onChange={handleTimeChange}
          className="w-full lg:px-2 px-3 lg:py-2.5 p-3  rounded-lg"
          id="reservationTime"
          name="reservationTime"
          min="08:00"
          max="17:00"
          step="3600"
        />
    </div>
    <div className="w-[45%]">
        <PersonSelect />
      </div>
    {/* Button */}
    <div className="w-[100%] lg:w-[45%] bg-[#2B5F2B] px-4 py-3 rounded-2xl">
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
  )
}
