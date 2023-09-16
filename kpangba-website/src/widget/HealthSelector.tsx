import { ArrowDown2 } from "iconsax-react";
import React, { useState } from "react";

interface HealthSelectorProps{
  insurance: string;
  setInsurance: React.Dispatch<React.SetStateAction<string>>
  formik:any
}
export default function HealthSelector({setInsurance,insurance,formik}:HealthSelectorProps) {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const healthArr = [
    "Nigerian Health Insurance",
    "Reliance Health",
    "Avon",
    "MyConvergenius",
    "AXA",
  ];
  const handleClick = (hmo:string) =>{
    setInsurance(hmo)
    formik.setFieldValue("healthcareServiceProvider", hmo);
    setShowDropDown(false)
  }
  return (
    <div
      className="w-full relative h-full p-3  rounded-lg flex justify-between items-center"
      onClick={() => setShowDropDown(!showDropDown)}
    >
      <p className={`${!insurance && "text-sm"}`}>{insurance ? insurance : "Health service provider"}</p>
      <ArrowDown2 size={20} />
      {showDropDown && (
        <div className="absolute left-0 bg-white z-10 top-12 w-full py-3 border">
          {healthArr.map((hmo, index) => (
            <div key={index} className="p-2 cursor-pointer !hover:bg-slate-500 " onClick={()=> handleClick(hmo)}>
              {hmo}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
