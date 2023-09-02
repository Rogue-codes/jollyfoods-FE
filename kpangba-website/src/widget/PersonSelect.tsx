import { useAuth } from "@/context/AuthContext";
import { User } from "iconsax-react";
import React, { useState } from "react";

export default function PersonSelect() {
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
        <User size={20} />{" "}
        <p>
          <strong>{adult}</strong> Adult
        </p>{" "}
        <p>
          <strong>{child}</strong> children
        </p>
      </div>

      {showSelector && (
        <div className="w-full p-5 absolute left-0 top-16 shadow-[rgba(0,0,0,0.25)_0px_25px_50px_12px] bg-white z-10">
          <div className="flex justify-between">
            <p>Adult</p>
            <div className="flex justify-evenly items-center gap-5">
              <div
                className="w-8 h-8 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
                onClick={() => handleDecrement("adult")}
              >
                -
              </div>
              <p>{adult}</p>
              <div
                className="w-8 h-8 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg "
                onClick={() => handleIncrement("adult")}
              >
                +
              </div>
            </div>
          </div>

          <div className="flex justify-between mt-5">
            <p>Children</p>
            <div className="flex justify-evenly items-center gap-5">
              <div
                className="w-8 cursor-pointer flex justify-center items-center h-8 border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
                onClick={() => handleDecrement("child")}
              >
                -
              </div>
              <p>{child}</p>
              <div
                className="w-8 h-8 cursor-pointer flex justify-center items-center border border-[#2B5F2B] text-[#2B5F2B] rounded-lg"
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
