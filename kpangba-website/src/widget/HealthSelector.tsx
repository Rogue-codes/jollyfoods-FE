import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";

export default function HealthSelector() {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const healthArr = [
    "Nigerian Health Insurance",
    "Reliance Health",
    "Avon",
    "MyConvergenius",
    "AXA",
  ];
  return (
    <div
      className="w-full relative h-full p-3 border border-black rounded-lg flex justify-between items-center"
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <p>Health service provider</p>
      <ArrowDown2 size={20} />
      {showDropDown && (
        <div className="absolute left-0 bg-white z-10 top-12 w-full py-3 border">
          {healthArr.map((hmo, index) => (
            <p key={index} className="p-2 cursor-pointer hover:bg-red-500 ">
              {hmo}
            </p>
          ))}
        </div>
      )}
    </div>
  );
}
