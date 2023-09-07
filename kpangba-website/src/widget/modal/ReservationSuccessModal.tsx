import { useAuth } from "@/context/AuthContext";
import { ReservationType, RestaurantType } from "@/interface";
import { useRouter } from "next/navigation";
import React, { Dispatch, SetStateAction } from "react";

interface ReserSuccessModalProps {
  setReservationsuccess: Dispatch<SetStateAction<boolean>>;
  reservationDetails: ReservationType | null;
  mealtype: string;
  menu: RestaurantType | undefined;
}

export default function ReservationSuccessModal({
  setReservationsuccess,
  reservationDetails,
  mealtype,
  menu,
}: ReserSuccessModalProps) {
  const router = useRouter();
  const { kpangba_user } = useAuth();
  return (
    <div className="lg:w-[80%] w-[95%] rounded-[20px] overflow-y-scroll scrollbar-none px-5 lg:px-12 lg:py-14 py-10 bg-white z-20">
      <div className="border-b border-[#E8EDE8] flex justify-start gap-16 pb-5 items-center lg:w-[70%]">
        <div>
          <p className="text-base font-normal text-[#302929]">Customer Name:</p>
          <p className="text-[20px] font-semibold text-[#302929]">
            {kpangba_user?.name}
          </p>
        </div>
      </div>

      <div className="border-b mt-7 border-[#E8EDE8] pb-5 items-center lg:w-[70%]">
        <p className="text-base font-normal text-[#302929]">Reservation code</p>
        <p className="text-[20px] font-bold text-[#302929]">
          {reservationDetails?.reservation_code}
        </p>
      </div>

      <div className="border-b mt-7 border-[#E8EDE8] pb-5 lg:w-[70%]">
        <p className="text-base font-normal text-[#302929]">Your Order</p>
        <p className="text-[20px] font-semibold text-[#302929]">
          {mealtype} buffet
        </p>
        <p className="text-base font-normal text-[#302929]">
          {" "}
          {mealtype === "Breakfast"
            ? menu?.menu?.[0]?.meals?.map((meals, _) => (
                <span key={_} className="mx-1">
                  {meals}
                </span>
              ))
            : mealtype === "Lunch"
            ? menu?.menu?.[1]?.meals?.map((meals, _) => (
                <span key={_} className="mx-1">
                  {meals}
                </span>
              ))
            : mealtype === "Dinner"
            ? menu?.menu?.[2]?.meals?.map((meals, _) => (
                <span key={_} className="mx-1">
                  {meals}
                </span>
              ))
            : null}
        </p>
      </div>

      <div className="border-b mt-7 border-[#E8EDE8] pb-5 lg:w-[70%] ">
        <p className="text-base font-normal text-[#302929]">Price</p>
        <p className="text-2xl font-normal text-[#302929]">N9,600 per Buffet</p>
      </div>

      <div className="px-6 py-[14px] border border-[#D0B61C] w-full lg:w-[40%] mt-7 rounded-[14px] bg-[#FEFAE1]">
        <p>
          An email containing your order summary has been sent to{" "}
          <strong>{kpangba_user?.email}</strong>
        </p>
      </div>

      <div className="flex flex-col lg:flex-row justify-start gap-8 mt-12 items-center">
        <button className="px-6 py-4 bg-[#2B5F2B] rounded-[20px] hover:scale-105 transition-all text-white">
          Make another reservation
        </button>
        <button
          className="px-6 py-4 bg-white border border-[#2B5F2B] text-[#2B5F2B] hover:scale-105 transition-all rounded-[20px]"
          onClick={() => {
            router.push("/");
            setReservationsuccess(false);
          }}
        >
          Go Home
        </button>
      </div>
    </div>
  );
}
