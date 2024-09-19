"use client";
import Select from "react-select";

type option = {
  value: string;
  label: string;
};
type SelectProps = {
  options: option[];
  bgwhite?: boolean;
  fullWidth?: boolean;
  placeholder: string;
  classes?: string;
};
const SelectOption = ({
  options,
  bgwhite = true,
  fullWidth = true,
  placeholder,
  classes,
}: SelectProps) => {
  const selectStyles = {
    control: (styles: any) => ({
      ...styles,
      backgroundColor: bgwhite ? "#fff" : "#F3F6FA",
      color: "black",
      minWidth: fullWidth ? "100%" : "auto",
      padding: "5px 10px",
      borderRadius: "50px",
      border: "1px solid #DFE0E4",
      boxShadow: "0",
      "&:hover": {
        borderColor: "#DFE0E4",
      },
    }),
    option: (styles: any, { isSelected }: { isSelected: any }) => ({
      ...styles,
      color: isSelected ? "#fff" : "#000",
      padding: "6px 10px",
      textAlign: "left",
      backgroundColor: isSelected ? "#0D47A1" : "white",
      //   "&:hover": { backgroundColor: "#0D47A1", color: "#fff" },
    }),
    placeholder: (styles: any) => ({ ...styles, color: "#000" }),
    menu: (styles: any) => ({ ...styles, zIndex: 10 }),
    singleValue: (styles: any) => ({ ...styles, color: "#000" }),
    dropdownIndicator: (provided: any) => ({
      ...provided,
      padding: "0",
      height: "auto",
    }),
  };
  return (
    <Select
      options={options}
      styles={selectStyles}
      placeholder={placeholder}
      className={`${classes}`}
      components={{
        IndicatorSeparator: () => null,
      }}
    />
  );
};

export default SelectOption;
