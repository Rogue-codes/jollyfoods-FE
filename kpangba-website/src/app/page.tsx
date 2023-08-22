import Footer from "@/component/Footer";
import HealthCard from "@/component/HealthCard";
import HealthPartners from "@/component/HealthPartners";
import HeroSection from "@/component/HeroSection/HeroSection";
import NavBar from "@/component/NavBar/NavBar";
import PopularLocation from "@/component/PopularLocation/PopularLocation";
import Royalty from "@/component/Royalty";
 
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="px-16">
      <NavBar />
        <HeroSection />
        <PopularLocation />
        <HealthCard />
      </div>
        <Royalty />
        <HealthPartners />
        <Footer />
    </main>
  )
}
