"use client";
import { Paystack, RestaurantPic } from "@/assets";
import BreakFastList from "@/component/FoodMenuList/LunchList";
import NavBar from "@/component/NavBar/NavBar";
import LunchList from "@/component/FoodMenuList/LunchList";
import DinnerList from "@/component/FoodMenuList/DinnerList";
import Image from "next/image";
import { useEffect, useState } from "react";
import {
  ArrowLeft2,
  Backward,
  Clock,
  CloseSquare,
  Location,
  Star1,
  User,
} from "iconsax-react";
import Link from "next/link";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { RestaurantType } from "@/interface";
import MenuTab from "@/component/menuTab";
import { useAuth } from "@/context/AuthContext";
import Backdrop from "@/widget/modal/Backdrop";
import { toast } from "react-toastify";

interface PageProps {
  params: { id: string };
}
export default function Resturant({ params }: PageProps) {
  const [loading, setLoading] = useState<boolean>(false);
  const [result, setResult] = useState<RestaurantType>();
  const [reservationLoading, setReservationLoading] = useState<boolean>(false);

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

  console.log(result);

  const [activeTab, setActiveTab] = useState(0);

  let menuContent;

  if (activeTab === 0) {
    menuContent = (
      <BreakFastList activeTab={activeTab} tabOptions={result?.menu} />
    );
  } else if (activeTab === 1) {
    menuContent = <LunchList activeTab={activeTab} tabOptions={result?.menu} />;
  } else {
    menuContent = (
      <DinnerList activeTab={activeTab} tabOptions={result?.menu} />
    );
  }

  const {
    reservationTime,
    handleTimeChange,
    adult,
    child,
    reservationDate,
    kpangba_user,
  } = useAuth();

  const getMealType = (time: string): string => {
    const hour = parseInt(time.split(":")[0]);

    if (hour >= 4 && hour < 12) {
      return "Breakfast";
    } else if (hour >= 12 && hour < 17) {
      return "Lunch";
    } else {
      return "Dinner";
    }
  };

  const mealType = getMealType(reservationTime);

  const [showModal, setShowModal] = useState(false);

  const [paymentType, setPaymentType] = useState<string>("full");

  console.log(result?.menu.length);

  const handleResrvation = async () => {
    try {
      if (!paymentType) {
        toast.error("Please select payment type");
      } else {
        setReservationLoading(true);
        const res = await ApiFetcher.post("/reservation/create", {
          resturant_id: result?._id,
          booked_date: reservationDate,
          booked_time: reservationTime,
          number_of_seats: adult + child,
          customer_id: kpangba_user?.id,
          adult: adult,
          amount: result && (result?.price_per_adult * adult) + (result?.price_per_child * child),
          payment_type: paymentType,
        });
        setReservationLoading(false);
        toast.success(res?.data?.data?.message);
      }
    } catch (error: any) {
      setReservationLoading(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  const pay_condition: number = paymentType === "full" ? 1 : 2;

  return (
    <div className="flex min-h-screen flex-col">
      <NavBar />
      {loading ? (
        <div className="w-full h-screen flex justify-center items-center">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="section1 mt-[8rem] px-4 lg:px-16 flex flex-col items-start justify-start text-start">
          <p className="text-[#302929] font-semibold lg:text-xl text-base lg:mb-6 mb-4">
            {result?.resturant_name}
          </p>
          <div className="flex lg:gap-16 gap-7 items-center text-center justify-center">
            <div className="flex gap-2 items-center text-center justify-center bg-[#FEFAE1] p-2 rounded-xl">
              <div>
                <Star1 variant="Bold" color="#D0B61C" size="20" />
              </div>
              <span className="text-[#302929] font-normal lg:text-base text-sm">
                {result?.rating}
              </span>
            </div>
            <div className="flex gap-2 lg:gap-4 items-start text-start justify-start">
              <div>
                <Location variant="Linear" color="#302929" size="20" />
              </div>
              <div className="text-[#302929] font-normal text-sm lg:text-base">
                {result?.location_meta?.address}
              </div>
            </div>
          </div>
          <div className="gap-3 mt-10 lg:w-[74rem] w-full items-center justify-center text-center flex flex-row">
            <div className=" w-[36.75rem] h-[10rem] lg:h-[14.9rem] ">
              <Image
                src={RestaurantPic}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="w-[36.75rem] h-[10rem] lg:h-[14.9rem]">
              <Image
                src={RestaurantPic}
                alt=""
                className="w-full h-full rounded-xl object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col lg:flex-row lg:justify-between gap-54 lg:gap-80 mt-10 w-full">
            <div className="">
              <p className="text-[#302929] font-semibold text-base lg:text-3xl">
                Today’s Menu
              </p>
              <MenuTab
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                tabOptions={result?.menu}
              />
              <div className="absolute z-20">{menuContent}</div>
            </div>
            <div className="lg:w-[25rem] w-full lg:h-[25rem] h-full lg:mt-8 mt-60 lg:pl-8  pl-0 flex flex-col items-start text-start justify-start border border-[#E2E9E2] bg-white rounded-2xl">
              <span className="font-semibold ml-4 lg:ml-0 mt-10 text-xl text-[#302929]">
                N{result?.price_per_adult.toLocaleString()}
                <span className="font-normal ml-3 text-base text-[#302929]">
                  per Buffet
                </span>
              </span>
              <div className="flex mt-8 ml-4 lg:ml-0 w-full items-start justify-start gap-2 lg:gap-20 text-start">
                <div className="flex flex-col gap-2 items-start text-start justify-start">
                  <div className="font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center">
                    <User variant="Linear" size="20px" color="#302929" />
                    <span>
                      {adult} {adult > 1 ? "Adults" : "Adult"}
                    </span>{" "}
                    <br />
                  </div>
                  {child > 0 && (
                    <div className="font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center">
                      <User variant="Linear" size="20px" color="#302929" />
                      <span>
                        {child} {child > 1 ? "Children" : "Child"}
                      </span>
                    </div>
                  )}
                </div>
                <div className="font-normal gap-4 text-base text-[#302929] flex items-center justify-center text-center">
                  <div className="w-full bg-[#D0B61C] rounded-lg text-white relative">
                    <input
                      type="time"
                      value={reservationTime}
                      onChange={handleTimeChange}
                      className="w-full p-2 text-white rounded-lg bg-transparent"
                      name=""
                      id=""
                    />
                  </div>
                </div>
              </div>
              <div className="mt-8 lg:w-[50%] w-[75%] ml-4 lg:ml-0 bg-[#FEFAE1] p-3 rounded-lg text-black">
                Meal Type: {mealType}
              </div>
              <button
                className="bg-[#2B5F2B] flex items-center justify-center hover:scale-105 transition-all w-full lg:w-[17rem] mt-8 text-white font-normal text-base lg:text-xl rounded-3xl mb-5 lg:mb-0 py-3 px-4 cursor-pointer "
                onClick={() => setShowModal(true)}
              >
                Continue to checkout
              </button>
            </div>
          </div>
          {showModal && (
            <Backdrop>
              <div className="lg:w-[80%] w-[95%] mt-28 rounded-[20px] overflow-y-scroll scrollbar-none px-5 lg:py-14 py-10 bg-white z-20">
                <div className="flex justify-start gap-4 items-center">
                  <CloseSquare
                    variant="Bold"
                    color="#302929"
                    size="32"
                    className="cursor-pointer hover:scale-110  transition-all"
                    onClick={() => setShowModal(false)}
                  />
                  <p className="lg:text-2xl text-xl text-[#302929]">
                    Make Payment
                  </p>
                </div>
                <div className="lg:mt-12 mt-6 flex flex-col">
                  <div className="first flex flex-col border-b-2 border-[#F7F8F7] w-full lg:w-[70%] pb-4 lg:pb-12 justify-start items-start text-start">
                    <div className="bg-[#FEFAE1] w-full lg:w-[90%] px-5 flex justify-between items-center border-[#D0B61C] text-[#302929]  py-2 border rounded-[14px] text-sm lg:text-xl font-normal">
                      <p>
                        Your order only serves for {adult + child}{" "}
                        {adult + child > 1 ? "persons" : "person"}
                      </p>
                    </div>
                    <p className="text-[#302929] mt-6 text-lg lg:text-xl font-semibold">
                      your order
                    </p>
                    <p className="text-[#302929] mt-3 lg:mt-5 text-base lg:text-xl font-semibold">
                      {mealType} Buffet
                    </p>
                    <span className="text-[#302929] mt-1 text-sm lg:text-base font-normal">
                      {mealType === "Breakfast"
                        ? result?.menu?.[0]?.meals?.map((meals, _) => (
                            <span key={_} className="mx-1">
                              {meals}
                            </span>
                          ))
                        : mealType === "Lunch"
                        ? result?.menu?.[1]?.meals?.map((meals, _) => (
                            <span key={_} className="mx-1">
                              {meals}
                            </span>
                          ))
                        : mealType === "Dinner"
                        ? result?.menu?.[2]?.meals?.map((meals, _) => (
                            <span key={_} className="mx-1">
                              {meals}
                            </span>
                          ))
                        : null}
                    </span>
                  </div>
                </div>
                <div className="mt-7 border-b-2 border-[#F7F8F7] w-full lg:w-[70%] pb-6 lg:pb-12  flex flex-col">
                  <div className="first flex flex-col justify-start items-start text-start">
                    <span className=" text-[#302929] text-base lg:text-xl font-semibold">
                      How would you like to pay
                    </span>
                    <div className="mt-2 flex items-center gap-4">
                      <div
                        className="w-4 h-4 p-1 flex justify-center items-center border border-[#D0B61C] rounded-full cursor-pointer"
                        onClick={() => setPaymentType("full")}
                      >
                        {paymentType === "full" && (
                          <div className="w-full h-full rounded-full bg-[#D0B61C]"></div>
                        )}
                      </div>
                      <div className="flex flex-col items-start justify-start text-start text-[#302929]">
                        <span className="lg:text-xl text-base font-semibold">
                          Full payment
                        </span>
                        <span className="lg:text-base text-sm font-normal">
                          Make total payment, you only need to present receipt
                          at the restaurant
                        </span>
                      </div>
                    </div>
                    <div className="mt-2 flex items-center gap-4">
                      <div
                        className="w-4 h-4 p-1 flex justify-center items-center border border-[#D0B61C] rounded-full cursor-pointer"
                        onClick={() => setPaymentType("half")}
                      >
                        {paymentType === "half" && (
                          <div className="w-full h-full rounded-full bg-[#D0B61C]"></div>
                        )}
                      </div>
                      <div className="flex flex-col items-start justify-start text-start text-[#302929]">
                        <span className="lg:text-xl text-base font-semibold">
                          Pay part, balance at the restaurant
                        </span>
                        <span className="lg:text-base text-sm font-normal">
                          Make half payment,Balance at the restaurant
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex border-b-2 border-[#F7F8F7] w-full lg:w-[70%] pb-8 text-start justify-start items-start lg:pb-12  flex-col mt-5">
                  <div className="text-[#302929] text-base lg:text-xl font-semibold">
                    Price
                  </div>
                  <div className="flex items-center text-start justify-start gap-10 lg:gap-28 w-full">
                    <div className="font-semibold flex gap-2 mt-3 text-sm lg:text-xl text-[#302929]">
                      ₦{result?.price_per_adult.toLocaleString()} (adults)  x {adult}   -----   ₦{result?.price_per_child.toLocaleString()} (children)  x {child}
                      <div className="font-normal ml-0 lg:ml-3 text-xs lg:text-base text-[#302929]">
                        per Buffets
                      </div>
                    </div>
                  </div>
                  <h1 className="font-bold mt-5 text-xl">
                    Total: ₦
                    {(
                      result &&
                      ((result?.price_per_adult * adult )+ (result?.price_per_child * child)) /
                        pay_condition
                    )?.toLocaleString()}
                  </h1>
                  {paymentType === "half" && (
                    <p className="bg-[#FEFAE1] p-2 mt-3">
                      Pending amount: ₦
                      {(
                      result &&
                      ((result?.price_per_adult * adult )+ (result?.price_per_child * child)) /
                        pay_condition
                    )?.toLocaleString()}
                    </p>
                  )}
                </div>
                <div className="mt-4 flex flex-col items-start justify-start text-center">
                  <div className="text-[#302929] text-base lg:text-xl font-semibold">
                    Pay with
                  </div>
                  <div className="w-36 h-20 mt-5">
                    <Image src={Paystack} alt="" className="object-cover" />
                  </div>
                </div>
                <button
                  type="button"
                  className="inline-flex mb-4 px-24 mt-5 justify-center rounded-2xl bg-[#2B5F2B]  py-4 hover:scale-105 transition-all text-sm font-normal text-white disabled:opacity-50 disabled:cursor-not-allowed "
                  onClick={handleResrvation}
                  disabled={reservationLoading}
                >
                  {reservationLoading ? "Making reservation..." : "Continue"}
                </button>
              </div>
            </Backdrop>
          )}
        </div>
      )}
    </div>
  );
}
