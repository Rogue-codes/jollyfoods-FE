"use client";
import { ArrowDown2, ArrowLeft } from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";
import { Breakfast, Logo } from "@/assets";
import Link from "next/link";
import Select from "@/component/select/Select";
import { FormikErrors, useFormik } from "formik";
import ApiFetcher from "@/utils/api/ApiFetcher";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { loginAuth } from "@/utils/api/auth";
import { useAuth } from "@/context/AuthContext";
interface UserLoginType {
  email: string;
  password: string;
}
function SignInPage() {
  const { login } = useAuth();
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const passwordRegex = RegExp(
    /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/
  );
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: async (values) => {
      setLoading(true);
      const { email, password } = values;
      try {
        const res = await ApiFetcher.post(`user/login`, {
          email: email,
          password: password,
        });
        setLoading(false);
        toast.success(res?.data?.message);
        login(res?.data?.data);
        loginAuth(res?.data?.access_token);
        router.push("/");
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    validate: (values) => {
      const errors: FormikErrors<UserLoginType> = {};
      if (!values.email) {
        errors.email = "Email is Required!";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address!";
      }
      if (!values.password) {
        errors.password = "password is Required!";
      } else if (!passwordRegex.test(values.password)) {
        errors.password =
          "password must be atleast 8 characters, with one uppercase, one lowercase and a special character!";
      }
      return errors;
    },
  });

  return (
    <div className="flex flex-col bg-white w-full py-3 px-4 lg:px-32">
      <Link href="/">
        {" "}
        <div className="flex flex-row mt-4 gap-8 items-center">
          <ArrowLeft />
          <span className="font-bold text-2xl">Go Back</span>
        </div>
      </Link>
      <div className="flex flex-row lg:w-[75.75] w-full px-3 lg:px-6 gap-10 h-[45.75] items-start text-start justify-start py-4 bg-white rounded-xl mt-7 border-2 shadow-xl">
        <div className="bg-white text-left w-full lg:w-1/2 px-3 lg:px-8">
          <div className="flex  gap-6 items-center mt-2 text-start justify-start mb-4">
            <div className="w-[40px] h-[40px]">
              <Image src={Logo} alt="kpangba Logo"  className="w-full" />
            </div>
            <span className="lg:text-xl text-lg font-semibold">Kpanbga</span>
          </div>
          <div className="flex flex-col items-start justify-start text-center">
            <span className="text-[#302929] text-xl lg:text-[32px] font-bold">
              Hi Welcome back
            </span>
            <span className="text-[#302929] mt-5 text-base font-normal">
              Login with your emil
            </span>
          </div>
          <form action="" className="mt-6" onSubmit={formik.handleSubmit}>
            <div className="w-full text-left mb-6">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Email
              </label>
              <input
                className={`${
                  formik.touched.email &&
                  formik.errors.email &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]`}
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                placeholder="email"
              />
            </div>
            {formik.touched.email && formik.errors?.email ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.email}
              </p>
            ) : (
              ""
            )}
            <div className="w-full text-left mb-8">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Password
              </label>
              <input
                className={`${
                  formik.touched.password &&
                  formik.errors.password &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]`}
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                placeholder="Password"
              />
            </div>
            {formik.touched.email && formik.errors?.password ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}
            <button
              type="submit"
              className="bg-[#2B5F2B] mb-1 mt-3 text-[#ffff] w-full py-3 rounded-3xl font-normal text-base"
            >
              {loading ? "Loading..." : "Log in"}
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

export default SignInPage;
