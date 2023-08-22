import HeroSection from "@/component/HeroSection/HeroSection";
import NavBar from "@/component/NavBar/NavBar";
 
 

export default function Home() {
  return (
    <main className="bg-orange-500 flex min-h-screen flex-col px-16">
        <NavBar />
        <HeroSection />
    </main>
  )
}
