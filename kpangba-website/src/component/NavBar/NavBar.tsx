'use client'
import React from "react";
import { Logo } from "../../assets/index";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { User } from "iconsax-react";
export default function NavBar() {
  const { kpangba_user } = useAuth();
  return (
    <div className="px-16 py-2 flex justify-between fixed bg-white pt-6 w-full left-0 top-0 z-50">
      <Link href="/">
        <div className="flex gap-3 items-center">
          <div className="w-full">
            <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
          </div>
          <span className="text-[20px]">Kpanbga</span>
        </div>
      </Link>
      <div className="flex gap-5 font-normal text-base items-center">
        <span>About</span>
        <span>Partners</span>
        <span>Blog</span>
        {kpangba_user ? (
          <button className="flex justify-between items-center !gap-3 bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
            <User variant="Bold" size={20} color="white" /> Profile
          </button>
        ) : (
          <Link href="/create-account">
            <span className="bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
              Create account
            </span>
          </Link>
        )}
      </div>
    </div>
  );
}
