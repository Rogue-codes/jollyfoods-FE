import { useAuth } from "@/context/AuthContext";
import { User } from "iconsax-react";
import React, { useState } from "react";

export default function  PersonSelect() {
  const { adult, child, handleIncrement, handleDecrement } = useAuth();
  const [showSelector, setShowSeletor] = useState<boolean>(false);
  return (
    <div
      className="w-full relative p-3 cursor-pointer bg-white rounded-lg"
      tabIndex={0}
      onBlur={() => setShowSeletor(false)}
    >
      <div
        className="w-full flex justify-between items-center bg-white rounded-lg"
        onClick={() => setShowSeletor(!showSelector)}
      >
       <div className="hidden lg:block"><User size={20} /></div> 
        <p>
          <strong>{adult}</strong> Adult
        </p>{" "}
        <p>
          <strong>{child}</strong> children
        </p>
      </div>

      {showSelector && (
        <div className="w-full lg:p-5 p-2 absolute left-0 top-16 shadow-[rgba(0,0,0,0.25)_0px_25px_50px_12px] bg-white z-10">
          <div className="flex justify-between">
            <p>Adult</p>
            <div className="flex ml-3 justify-evenly items-center gap-3">
              <div
                className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
                onClick={() => handleDecrement("adult")}
              >
                -
              </div>
              <p>{adult}</p>
              <div
                className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg "
                onClick={() => handleIncrement("adult")}
              >
                +
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <p>Children</p>
            <div className="flex ml-1 justify-evenly items-center gap-2">
              <div
                className="lg:w-8 w-5 h-5 cursor-pointer flex justify-center items-center lg:h-8 border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
                onClick={() => handleDecrement("child")}
              >
                -
              </div>
              <p>{child}</p>
              <div
                className="lg:w-8 lg:h-8 w-5 h-5 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
                onClick={() => handleIncrement("child")}
              >
                +
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
