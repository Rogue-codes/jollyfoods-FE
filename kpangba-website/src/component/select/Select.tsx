"use client";

import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";
interface SelectProps {
  options: string[];
  icon?: any;
  className?: string;
  switchIcon?: boolean;
  placeholder: string;
}
export default function Select({
  options,
  icon,
  className,
  placeholder,
  switchIcon = false,
}: SelectProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  const [selected, setSelected] = useState<number | null>(null);

  const handleSelected = (index: number) => {
    setSelected(index + 1);
  };

  return (
    <div
      className={`flex relative gap-2 items-start justify-start border rounded-2xl p-3 bg-white border-[#E8EDE8] ${className}`}
      onClick={() => setShowDropDown(!showDropDown)}
      tabIndex={0}
      onBlur={() => setShowDropDown(false)}
    >
      <div className="w-full flex justify-between items-center">
        <div className="flex justify-start gap-3 items-center">
          {icon}
          {selected ? (
            <p>
              {selected} {selected > 1 ? "seats" : "seat"}
            </p>
          ) : (
            <p>{placeholder}</p>
          )}
        </div>

        <ArrowDown2 size={20} />
      </div>

      {showDropDown && (
        <div className="w-full cursor-pointer absolute left-0 top-12 z-10 bg-white border border-[#E8EDE8] max-h-[300px] overflow-y-scroll">
          {options.map((item, index) => (
            <div
              key={index}
              className={`${
                selected?.toString() === item
                  ? "bg-[#2B5F2B] hover:bg-[#2B5F2B]"
                  : "hover:bg-[#FEF8D2]"
              } w-full  p-3 flex justify-start gap-3 items-center`}
              onClick={() => {
                handleSelected(index);
                setShowDropDown(false);
              }}
            >
              {icon}
              <p className="">{item}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
