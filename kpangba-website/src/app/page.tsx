"use client";
import Footer from "@/component/Footer";
import HealthCard from "@/component/HealthCard";
import HealthPartners from "@/component/HealthPartners";
import HeroSection from "@/component/HeroSection/HeroSection";
import NavBar from "@/component/NavBar/NavBar";
import PopularLocation from "@/component/PopularLocation/PopularLocation";
import Royalty from "@/component/Royalty";
import { RestaurantType } from "@/interface";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { useEffect, useState } from "react";

export default function Home() {
  const [restuarants,setRestuarants] = useState<RestaurantType[] | null>(null)
  const [loading,setLoading] = useState<boolean>(false)
  const getResturants = async () => {
    setLoading(true)
    try {
      const res = await ApiFetcher.get(`/resturant/all`);
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
  }, []);
  return (
    <main className="flex min-h-screen flex-col">
      <div className="px-16">
        <NavBar />
        <HeroSection loading={loading} restuarants={restuarants} />
        <PopularLocation />
        <HealthCard />
      </div>
      <Royalty />
      <HealthPartners />
      <Footer />
    </main>
  );
}
