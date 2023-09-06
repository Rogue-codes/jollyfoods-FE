"use client";
import { ArrowLeft } from "iconsax-react";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Breakfast, Logo } from "@/assets";
import Link from "next/link";
import OtpInput from "@/component/OtpInput";
import { UserProps } from "@/interface";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";
import { loginAuth } from "@/utils/api/auth";

function VerifyLoginPage() {
  const [otp, setOtp] = useState("");
  const onChange = (value: string) => setOtp(value);
  const [user, setUser] = useState<UserProps | null>(null);
  const USER_SESSION = typeof window !== "undefined" && sessionStorage.getItem("user");
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (USER_SESSION) {
      setUser(JSON.parse(USER_SESSION));
    }
  }, []);

  const { kpangba_user, login, logout } = useAuth();

  const router = useRouter();

  const verifyUser = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await ApiFetcher.post("/user/account/verify", {
        otp: otp,
        user_id: user?.id,
      });
      setLoading(false);
      toast.success(res?.data?.message);
      login(res?.data?.data);
      loginAuth(res?.data?.access_token);
      router.push("/");
    } catch (error: any) {
      setLoading(false);
      toast.error(error?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col bg-white w-full pt-3 p-4 lg:px-32">
      <Link href="/create-account">
        <div className="flex flex-row mt-5 gap-4 lg:gap-8 items-center">
          <ArrowLeft />
          <span className="font-bold text-lg lg:text-2xl">Go Back</span>
        </div>
      </Link>
      <div className="flex flex-col lg:flex-row lg:w-[75.75] w-full lg:px-6 px-2 gap-10 h-[45.75] items-start text-start justify-start lg:items-center lg:text-center lg:justify-center py-8 rounded-xl mt-8 border-2 shadow-xl">
        <div className="bg-white text-left w-full lg:w-1/2 px-4 lg:px-8">
          <div className="flex gap-5 items-center mt-8 text-start justify-start mb-9">
            <div className="w-[40px] h-[40px]">
              <Image src={Logo} alt="kpangba Logo" className="w-full" />
            </div>
            <span className="text-[20px] font-semibold">Kpanbga</span>
          </div>
          <div className="flex flex-col items-start justify-start text-center">
            <span className="text-[#302929] text-lg lg:text-[32px] font-bold">
              Verify it's you
            </span>
            <span className="text-[#302929] mt-5 text-sm lg:text-base font-normal">
              Enter code sent to your e-mail
            </span>
          </div>
          <form
            action=""
            className="mt-10"
            onSubmit={(e: React.FormEvent<HTMLFormElement>) => verifyUser(e)}
          >
            <OtpInput value={otp} valueLength={4} onChange={onChange} />
            <div className="flex gap-14 mt-12 items-start text-center justify-start">
              <span className="text-[#2B5F2B] text-sm lg:text-base font-normal cursor-pointer">
                Resend code
              </span>
              <span className="text-[#302929] text-sm lg:text-base font-normal">
                00:60 secs
              </span>
            </div>
            <button disabled={otp.length < 4}  className="bg-[#2B5F2B] flex items-center justify-center text-center mb-5 mt-12 text-[#ffff] w-full py-3 rounded-3xl font-normal text-base disabled:cursor-not-allowed disabled:opacity-50 ">
              {loading ? "Loading..." : "Verify Code"}
            </button>
          </form>
        </div>
        <div className="bg-[#2B5F2B] hidden mr-4 pl-14 rounded-xl lg:block flex-col items-start text-start justify-start w-1/2">
          <div className="flex flex-col mt-16 text-left">
            <span className="text-[#fff] text-[28px] font-semibold">
              e-health card <br />
              for all your health needs <b />
            </span>
            <span className="text-[#fff] text-base mt-5 font-normal">
              Get access to healthcare services <br />
              at all levels when you buy meals from us
            </span>
          </div>
          <div className="ml-44 mt-12 bg-[#FADB21] pl-8 pt-7 pr-3 rounded-tl-2xl rounded-br-xl">
            <Image src={Breakfast} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerifyLoginPage;
