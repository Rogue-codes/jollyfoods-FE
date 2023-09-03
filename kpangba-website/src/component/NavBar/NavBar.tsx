'use client'
import React, { useState } from "react";
import { Logo } from "../../assets/index";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "@/context/AuthContext";
import { CloseSquare, HambergerMenu, User } from "iconsax-react";
export default function NavBar() {
  const { kpangba_user } = useAuth();
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="lg:px-16 px-4 py-2 bg-white flex justify-between fixed pt-6 !w-[100%] left-0 top-0 z-50">
      <Link href="/">
        <div className="flex gap-3 items-center">
          <div className="w-full">
            <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
          </div>
          <span className="text-[20px]">Kpanbga</span>
        </div>
      </Link>
      <div className="gap-5 hidden lg:flex font-normal text-base items-center">
        <span>About</span>
        <span>Partners</span>
        <span>Blog</span>
        {kpangba_user ? (
          <div className="flex justify-between items-center !gap-3 bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
            <User variant="Bold" size={20} color="white" />  Profile
          </div>
        ) : (
          <Link href="/create-account">
            <span className="bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
              Create account
            </span>
          </Link>
        )}
      </div>
      {showMenu ? (
        <div
          className="block lg:hidden z-30 transition-all justify-start items-center"
          onClick={() => setShowMenu(!showMenu)}
        >
          <CloseSquare variant="Bold" size="32" color="#2B5F2B" />
        </div>
      ) : (
        <div
          className="block lg:hidden z-30 transition-all  justify-start items-center"
          onClick={() => setShowMenu(true)}
        >
          <HambergerMenu variant="Linear" size="32" color="#302929" />
        </div>
      )}
      <div
        className={`${
          showMenu ? "translate-x-0" : "translate-x-[-100%]"
        } w-full bg-white fixed z-20 bg lg:hidden justify-start items-center top-0 left-0 h-full transition-transform`}
      >
       <div className="gap-12 mt-24 flex flex-col font-normal text-base items-center">
        <span className="text-[#2B5F2B] text-base font-medium">About</span>
        <span className="text-[#2B5F2B] text-base font-medium">Partners</span>
        <span className="text-[#2B5F2B] text-base font-medium">Blog</span>
        {kpangba_user ? (
          <div className="flex justify-between items-center !gap-3 bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
            <User variant="Bold" size={20} color="white" />  Profile
          </div>
        ) : (
          <Link href="/create-account">
            <span className="bg-[#2B5F2B] py-3.5 px-6 text-[#ffff] rounded-[20px] cursor-pointer">
              Create account
            </span>
          </Link>
        )}
      </div>
      </div>
    </div>
  );
}
