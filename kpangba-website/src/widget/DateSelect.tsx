/* eslint-disable @typescript-eslint/no-explicit-any */
import { Calendar, Calendar1, Calendar2 } from 'iconsax-react';
import React from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

interface DateSelectProps {
    className?: string,
    onChange?: (e: Date | null) => any,
    placeholderText?: string,
    selected? : Date | null,
    minDate? : Date,
    maxDate? : Date,
    style?: React.CSSProperties,
    disbaled? : boolean,
    nullValuePlaceHolder? : string
}
export default function DateSelect(
    {
        className="",
        onChange,
        placeholderText,
        selected,
        minDate,
        style,
        disbaled=false,
        nullValuePlaceHolder="",
        maxDate
    }: DateSelectProps
) {
    const CustomInput = React.forwardRef(({value, onClick, onChange} : any, ref : any) => {
        return <div onClick={onClick}
                className={`flex gap-3 pl-5 item-center cursor-pointer items-center bg-white  ` + className + (disbaled ? " opacity-80" : '')} style={style}  >
            <Calendar2 variant='Linear' size="28" className='text-blue-1 '/>
            <input 
                className='disabled:cursor-not-allowed focus:outline-none text-base text-[#302929] w-full placeholder:text-[#302929] bg-white'
                value={value ? value : nullValuePlaceHolder}
                onChange={onChange}
                placeholder={placeholderText}
                ref={ref}
                // disabled={disbaled}
            />
        </div>
    })
    return <div>
        <DatePicker
            onChange={(e) => onChange && onChange(e)}
            customInput={<CustomInput />}
            selected={selected}
            minDate={minDate}
            maxDate={maxDate}
            // disabled={disbaled}
        />
    </div>
}