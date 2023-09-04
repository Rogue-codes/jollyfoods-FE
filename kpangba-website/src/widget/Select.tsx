import React from "react";
import Select, { StylesConfig, Props } from "react-select";
// import type { IconType } from "react-icons/lib";

// assets import
// import { CloseCircle, Location } from "iconsax-react";
import { ArrowDown2, Location } from "iconsax-react";

export interface OptionProps {
  value: any;
  label: string;
  icon?: JSX.Element;
  id?: String;
}

interface SelectProps {
  icon?: JSX.Element;
  label?: string;
  height?: string;
  width?: string;
  options: OptionProps[];
  onChange?:
    | React.Dispatch<React.SetStateAction<OptionProps | null>>
    | React.Dispatch<React.SetStateAction<number>>;
  grouptext?: string;
  defaultValue?: OptionProps;
  className?: string;
  hideIcon?: boolean;
  hideOptionIcons?: boolean;
  boxShadow?: string;
  notSearchable?: boolean;
  outlineOnSelect?: boolean;
  borderRadius?: string;
  value?: OptionProps | null | number;
  hideDropDownIcon?: boolean;
  hideHoverBorder?: boolean;
  removeValueContainerPadding?: boolean;
  customDropDownIcon?: JSX.Element;
  textWhite?: boolean;
  textSmall?: boolean;
  onDelete?: Function | null;
  hasIconPadding?: boolean;
}

const NewSelect = Select as any;

/**
 * @param icon         : The icon of the plcaeholder
 * @param label        : The text of the placeholder
 * @param height       : The height -> default is 48px
 * @param width        : The width  -> default is 100%
 * @param options      : The list of the options available
 * @param onChange     : The onchange function
 * @param grouptext    : The header text if nay
 * @param defaultValue : The defaullValue if nay
 * @param className    : The classname prop
 * @param hideIcon
 * @param hideOptionIcons
 */

export default function CustomSelect({
  icon,
  label,
  height,
  width,
  options,
  onChange,
  grouptext,
  defaultValue,
  className,
  hideIcon = false,
  hideOptionIcons = false,
  boxShadow,
  notSearchable,
  outlineOnSelect = false,
  borderRadius,
  value,
  hideDropDownIcon = false,
  hideHoverBorder = true,
  removeValueContainerPadding = false,
  customDropDownIcon,
  textWhite = false,
  textSmall = false,
  hasIconPadding = false,
}: SelectProps) {
  const customstyles: StylesConfig = {
    control: (provided, state) => ({
      ...provided,
      border: "1px solid #E8EDE8",
      background: "white",
      height: height || "48px",
      color: "#486581",
      width: width || "100%",
      borderRadius: borderRadius || "8px",
      minWidth: "100%",
      "&:hover": {
        border: hideHoverBorder ? "" : "2px solid #000",
      },
    }),
    valueContainer: (provided, state) =>
      removeValueContainerPadding
        ? {
            ...provided,
            padding: "0px",
            color: "white",
          }
        : { ...provided },

    //   container: (provided : any, state :any) => ({
    //     ...provided,
    //     height: "100px",
    //     color: "#486581",8
    //   }),
    menu: (provided, state) => ({
      ...provided,
      top: "-20",
      overflow: "hidden",
      zIndex: 20,
      background: textWhite ? "#627496" : "white",
    }),
  };

  const formatGroupLabel = (data: any) => (
    <div className="text-[#302929] flex justify-center">
      <h3 className="text-center py-1 normal-case">{data.label}</h3>
    </div>
  );
  return (
    <div className="relative">
      <NewSelect
        value={value}
        options={
          grouptext
            ? [
                {
                  label: grouptext,
                  options,
                },
              ]
            : options
        }
        styles={customstyles}
        placeholder={
          label ? (
            <p
              className={`flex gap-3 items-center text-[#302929] ${
                textSmall ? "text-md" : "text-md"
              } leading-6 whitespace-nowrap`}
            >
              {icon}
              {label}
            </p>
          ) : (
            <></>
          )
        }
        components={{
          DropdownIndicator: () =>
            !hideDropDownIcon &&
            (customDropDownIcon ? (
              customDropDownIcon
            ) : (
              <ArrowDown2 size="20" color="#000" className="mr-4" />
            )),
          IndicatorSeparator: () => null,
        }}
        getOptionLabel={(e: OptionProps) => {
          return (
            <p
              className={`flex items-center ${hasIconPadding ? "gap-2" : ""} ${
                textSmall ? "text-sm" : "text-md"
              } ${!textWhite ? "text-blue-600" : "text-white"}`}
            >
              {hideOptionIcons ? (
                e.icon || <Location size="32" color="#FF8A65" variant="Bold" />
              ) : (
                <></>
              )}
              {e.label}
            </p>
          );
        }}
        onChange={(e: any) => onChange && onChange(e)}
        formatGroupLabel={grouptext ? formatGroupLabel : null}
        defaultValue={defaultValue}
        classNames={{
          control: (state: any) => className,
        }}
        theme={(theme: any) => ({
          ...theme,
          borderRadius: "8px",
          colors: {
            ...theme.colors,
            primary25: textWhite ? "" : "rgb(228 231 237 / 0.5)",
            primary: textWhite ? "#3A527B" : "#e4ede4",
          },
        })}
        isSearchable={!notSearchable}
      />
    </div>
  );
}
