"use client";
import Footer from "@/component/Footer";
import HealthCard from "@/component/HealthCard";
import HealthPartners from "@/component/HealthPartners";
import HeroSection from "@/component/HeroSection/HeroSection";
import NavBar from "@/component/NavBar/NavBar";
import PopularLocation from "@/component/PopularLocation/PopularLocation";
import Royalty from "@/component/Royalty";
import { useAuth } from "@/context/AuthContext";
import { OptionProps, RestaurantType } from "@/interface";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { useEffect, useState } from "react";

export default function Home() {
  const {location,setLocation} = useAuth()
  const [restuarants,setRestuarants] = useState<RestaurantType[] | null>(null)
  const [loading,setLoading] = useState<boolean>(false)

  const searchParams = location ? `?location=${location?.value}`:""
  const getResturants = async () => {
    setLoading(true)
    try {
      const res = await ApiFetcher.get(`/resturant/all${searchParams}`);
      setLoading(false)
      setRestuarants(res?.data?.data)
      console.log(res.data.data);
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  };

  useEffect(() => {
    getResturants();
  }, [location]);
  return (
    <main className="flex overflow-hidden w-full min-h-screen flex-col">
      <div className="lg:px-16 px-2 w-full">
        <NavBar />
        <HeroSection location={location} setLocation={setLocation} loading={loading} restuarants={restuarants} />
        <PopularLocation   />
        <HealthCard />
      </div>
      <Royalty />
      <HealthPartners />
      <Footer />
    </main>
  );
}
