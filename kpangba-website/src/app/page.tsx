"use client";
import Footer from "@/component/Footer";
import HealthCard from "@/component/HealthCard";
import HealthPartners from "@/component/HealthPartners";
import HeroSection from "@/component/HeroSection/HeroSection";
import ImageGallery from "@/component/ImageCarousel";
import NavBar from "@/component/NavBar/NavBar";
import PopularLocation from "@/component/PopularLocation/PopularLocation";
import Royalty from "@/component/Royalty";
import Filter from "@/component/filtercomponent/Filter";
import { useAuth } from "@/context/AuthContext";
import { RestaurantType } from "@/interface";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { Whatsapp } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const { location } = useAuth();
  const [restuarants, setRestuarants] = useState<RestaurantType[] | null>(null);
  const [allRestuarants, setAllRestuarants] = useState<RestaurantType[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const searchParams = location ? `?location=${location?.value}` : "";
  const getResturants = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.get(`/resturant/all${searchParams}`);
      setLoading(false);
      setRestuarants(res?.data?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const getAllResturants = async () => {
    setLoading(true);
    try {
      const res = await ApiFetcher.get(`/resturant/all`);
      setLoading(false);
      setAllRestuarants(res?.data?.data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    getResturants();
    getAllResturants()
  }, [location]);
  return (
    <main className="flex overflow-hidden w-full min-h-screen flex-col">
      <div className="lg:px-16 px-2 w-full">
        <NavBar />
        <HeroSection />
        <Filter loading={loading} restuarants={restuarants} allResturants={allRestuarants} />
        <div className="flex w-full overflow-auto flex-row mt-[4rem] items-center justify-center gap-5">
          <ImageGallery />
        </div>
        <PopularLocation />
        <HealthCard />
      </div>
      <Royalty />
      <HealthPartners />
      <Footer />
      <div
        className="fixed bottom-20 right-8 z-200 shadow-xl p-2 rounded-full bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <Link href="https://wa.me/2348124969118">
          <div className="flex flex-row gap-3 justify-center text-center items-center">
            <Whatsapp color="#25D366" size="50" variant="Linear" />
            {isHovered && (
              <span className="mr-8 text-base text-[#25D366]">
                Chat with us
              </span>
            )}
          </div>
        </Link>
      </div>
    </main>
  );
}
