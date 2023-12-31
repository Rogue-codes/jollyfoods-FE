"use client";
import { ArrowLeft } from "iconsax-react";
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
        typeof window !== "undefined" && sessionStorage.setItem("user", JSON.stringify(res?.data?.data))
        router.push('/verify-account')
      //   // if(res.data.status === "success") {
      //   //     setShowOtpModal(true);
      //   // }
      //   localStorage.setItem("token", JSON.stringify(res.data.token));
      } catch (error:any) {
        setLoading(false);
        toast.error(error?.response?.data?.message);
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
    <div className="flex flex-col bg-white w-full lg:pt-6 px-4 lg:px-32">
      <Link href="/">
        {" "}
        <div className="flex flex-row lg:mt-3 mt-10 lg:gap-8 gap-5 items-center">
          <ArrowLeft />
          <span className="font-bold lg:text-2xl text-lg ">Go Back</span>
        </div>
      </Link>
      <div className="flex lg:flex-row flex-col lg:w-[75.75] w-full lg:px-6 px-1 gap-10 h-[45.75] lg:items-center items-start lg:text-center text-center lg:justify-center justify-start rounded-xl mt-11 border-2 shadow-xl">
        <div className="text-left lg:w-1/2 w-full px-4 lg:px-8">
          <div className="flex lg:w-[8.7rem] w-full text-start justify-start items-start lg:items-center mt-6 lg:text-center lg:justify-center gap-6 mb-4">
            <div className="w-[60px] h-[60px]">
              <Image src={Logo} alt="kpangba Logo" className="w-full h-full" />
            </div>
            <div className="text-[20px] font-semibold">Kpanbga</div>
          </div>
          <span className="text-[#302929] lg:text-[32px] text-lg font-bold">
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
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] focus:outline-none placeholder:text-[#989494] placeholder:text-sm text-base font-normal`}
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
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-[#989494] placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
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
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-[#989494] placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
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
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight focus:outline-none placeholder:text-[#989494] placeholder:text-sm text-base font-normal focus:border-[#2B5F2B]`}
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
                } border border-[#E8EDE8] rounded-2xl w-full py-3 px-3 text-[#302929] leading-tight !focus:outline-none placeholder:text-[#989494] placeholder:text-sm text-base font-normal`}
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
          <p className="text-sm mx-auto text-center pb-2">Already have an Account? <span className="text-[#2B5F2B] font-bold"><Link href='/sign-in'>Sign-in</Link></span></p>
        </div>

        <div className="bg-[#2B5F2B] hidden lg:block mr-4 pl-14 rounded-xl flex-col items-start text-start justify-start w-1/2">
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
