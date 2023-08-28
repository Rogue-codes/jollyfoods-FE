"use client";
import { ArrowDown2, ArrowLeft, Js } from "iconsax-react";
import React, { useState } from "react";
import Image from "next/image";
import { Breakfast, Logo } from "@/assets";
import Link from "next/link";
import { FormikErrors, useFormik } from "formik";
import ApiFetcher from "@/utils/api/ApiFetcher";
import HealthSelector from "@/widget/HealthSelector";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

type UserRegistrationType = {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  confirmPassword: string;
  healthcareServiceProvider: string;
};

function CreateAccount() {
  const router = useRouter()
  const [insurance, setInsurance] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  console.log(insurance)

  const emailRegex = RegExp(/^\S+@\S+\.\S+$/);
  const passwordRegex = RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$ %^&*-]).{8,}$/)
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      phoneNumber: "",
      healthcareServiceProvider: "",
    },
    onSubmit: async (values) => {
      const body = {...values, healthcareServiceProvider:insurance}
      setLoading(true);
      try {
        const res = await ApiFetcher.post(`user/register`, {
          name: body.name,
          email:body.email,
          phoneNumber:body.phoneNumber,
          healthcareServiceProvider:body.healthcareServiceProvider,
          password:body.password,
          confirmPassword: body.confirmPassword
        });
        setLoading(false);
        toast.success(res?.data?.message)
        sessionStorage.setItem("user", JSON.stringify(res?.data?.data))
        router.push('/verify-account')
      //   // if(res.data.status === "success") {
      //   //     setShowOtpModal(true);
      //   // }
      //   localStorage.setItem("token", JSON.stringify(res.data.token));
      } catch (error) {
        setLoading(false);
        console.log(error);
      }
    },
    validate: (values) => {
      const errors: FormikErrors<UserRegistrationType> = {};
      if (!values.name) {
        errors.name = "username is Required!";
      }
      if (!insurance) {
        errors.healthcareServiceProvider =
          "Health care service provider is Required!";
      }
      if (!values.email) {
        errors.email = "Email is Required!";
      } else if (!emailRegex.test(values.email)) {
        errors.email = "Invalid email address!";
      }
      if (!values.phoneNumber) {
        errors.phoneNumber = "Phone Number is Required!";
      } else if (values.phoneNumber.length !== 11) {
        errors.phoneNumber = "Phonenumber  must be 11 characters!";
      }
      if (!values.password) {
        errors.password = "password is Required!";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "password must be atleast 8 characters, with one uppercase, one lowercase and a special character!";
      }
      if (!values.confirmPassword) {
        errors.confirmPassword = "confirmPassword is Required!";
      } else if (values.confirmPassword !== values.password) {
        errors.confirmPassword = "Password does not match!";
      }
      return errors;
    },
  });

  return (
    <div className="flex flex-col bg-white w-full pt-6 px-32">
      <Link href="/">
        {" "}
        <div className="flex flex-row mt-3 gap-8 items-center">
          <ArrowLeft />
          <span className="font-bold text-2xl">Go Back</span>
        </div>
      </Link>
      <div className="flex flex-row w-[75.75] px-6 gap-10 h-[45.75] items-center text-center justify-center bg-white rounded-xl mt-11 border-2 shadow-xl">
        <div className="bg-white text-left w-1/2 px-8">
          <div className="flex w-[8.7rem] items-center mt-6 text-center justify-center mb-4">
            <div className="w-full">
              <Image src={Logo} alt="kpangba Logo" width={40} height={40} />
            </div>
            <span className="text-[20px] font-semibold">Kpanbga</span>
          </div>
          <span className="text-[#302929] text-[32px] font-bold">
            Lets create your account
          </span>
          <form action="" className="mt-10" onSubmit={formik.handleSubmit}>
            <div className="w-full text-left mb-3">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Full Name
              </label>
              <input
                className={`${
                  formik.touched.name &&
                  formik.errors.name &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] focus:outline-none placeholder:text-black placeholder:text-sm text-base font-normal`}
                type="text"
                value={formik.values.name}
                onChange={formik.handleChange}
                name="name"
                placeholder="Full Name"
              />
            </div>
            {formik.touched.name && formik.errors.name ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.name}
              </p>
            ) : (
              ""
            )}

            <div className="w-full text-left mb-3">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Email
              </label>
              <input
                className={`${
                  formik.touched.email &&
                  formik.errors.email &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-black placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
                type="text"
                value={formik.values.email}
                onChange={formik.handleChange}
                name="email"
                placeholder="email"
              />
            </div>
            {formik.touched.email && formik.errors.email ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.email}
              </p>
            ) : (
              ""
            )}

            <div className="w-full text-left mb-3">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Phone Number
              </label>
              <input
                className={`${
                  formik.touched.phoneNumber &&
                  formik.errors.phoneNumber &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-black placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
                type="text"
                value={formik.values.phoneNumber}
                onChange={formik.handleChange}
                name="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.phoneNumber}
              </p>
            ) : (
              ""
            )}

            <div className="w-full text-left mb-3">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Password
              </label>
              <input
                className={`${
                  formik.touched.password &&
                  formik.errors.password &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-black placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
                type="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                name="password"
                placeholder="Password"
              />
            </div>
            {formik.touched.password && formik.errors.password ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.password}
              </p>
            ) : (
              ""
            )}

            <div className="w-full text-left mb-3">
              <label className="block text-[#302929] text-base font-normal mb-2">
                Confirm Password
              </label>
              <input
                className={`${
                  formik.touched.confirmPassword &&
                  formik.errors.confirmPassword &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight !focus:outline-none placeholder:text-black placeholder:text-sm text-base font-normal`}
                type="password"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                name="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
            {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
              <p className="-mt-2 mb-4 text-red-600 text-xs">
                {formik.errors.confirmPassword}
              </p>
            ) : (
              ""
            )}

            <div>
              <label
                htmlFor=""
                className="block text-[#302929] text-base font-normal mb-2"
              >
                Choose healthcare service provider
              </label>
              <div
                className={`${
                  formik.touched.healthcareServiceProvider &&
                  formik.errors.healthcareServiceProvider &&
                  "border border-red-500 bg-red-100"
                } border border-[#E8EDE8] rounded-2xl w-full text-[#302929] leading-tight focus:outline-none text-base font-normal focus:border-[#2B5F2B]`}
              >
                <HealthSelector
                  insurance={insurance}
                  setInsurance={setInsurance}
                  formik={formik}
                />
              </div>
              {formik.touched.healthcareServiceProvider &&
              formik.errors.healthcareServiceProvider ? (
                <p className=" my-1 text-red-600 text-xs">
                  {formik.errors.healthcareServiceProvider}
                </p>
              ) : (
                ""
              )}
            </div>

            <div className="flex gap-4 my-3">
              <input
                type="checkbox"
                className="w-5 h-5  accent-[#2B5F2B] cursor-pointer rounded-lg"
                id="checkbox"
              />
              <span className="text-[#302929] font-normal text-base">
                By clicking you agree to Kpangba terms and policies
              </span>
            </div>
            <button
              type="submit"
              className="bg-[#2B5F2B] mb-5 mt-3 text-[#ffff] w-full py-3 rounded-3xl font-normal text-base"
            >
              {loading ? "loading...": "Create Account"}
            </button>
          </form>
        </div>
        <div className="bg-[#2B5F2B] mr-4 pl-14 rounded-xl flex flex-col items-start text-start justify-start w-1/2">
          <div className="flex flex-col mt-16 text-left">
            <span className="text-[#fff] text-[28px] font-semibold">
              Helping users solve <br />
              out-of-pocket health <br />
              expenditure
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

export default CreateAccount;
