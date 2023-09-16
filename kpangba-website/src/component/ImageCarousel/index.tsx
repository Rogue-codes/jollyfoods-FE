import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HeroImage1, HeroImage2, HeroImage3, HeroImage4 } from "@/assets";
import Image from "next/image";

const ImageGallery: React.FC = () => {
  const [scrollY, setScrollY] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex w-full overflow-auto flex-row scrollbar-none items-center justify-center gap-5">
      {/* Show the first image only on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 50 ? 1 : 0,
          y: scrollY > 100 ? 0 : 100,
        }}
        transition={{ duration: 0.5 }}
        className="rounded-xl hidden  md:block" // Show on larger screens, hide on mobile
      >
        <Image src={HeroImage1} alt="" width={248} height={217} />
      </motion.div>

      {/* Show the other images on larger screens */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 200 ? 1 : 0,
          y: scrollY > 200 ? 0 : 100,
        }}
        transition={{ duration: 0.5 }}
        className="rounded-xl hidden md:block"
      >
        <Image src={HeroImage2} alt="" width={248} height={256} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 300 ? 1 : 0,
          y: scrollY > 300 ? 0 : 100,
        }}
        transition={{ duration: 0.5 }}
        className="rounded-xl block" // Show on mobile, hide on larger screens
      >
        <Image src={HeroImage3} alt="" width={282} height={291} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{
          opacity: scrollY > 400 ? 1 : 0,
          y: scrollY > 400 ? 0 : 100,
        }}
        transition={{ duration: 0.5 }}
        className="rounded-xl hidden md:block" // Show on larger screens, hide on mobile
      >
        <Image src={HeroImage4} alt="" width={280} height={308} />
      </motion.div>
    </div>
  );

}

export default ImageGallery;
