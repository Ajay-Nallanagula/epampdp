import React, { ChangeEvent } from "react";
import { IOption, ISelectedCategory } from "../schema/schema";

interface DropdownProps {
  options: IOption[];
  onChange?: React.ChangeEventHandler; //(event: ChangeEvent<HTMLInputElement>) => void;
  styles?: any;
  isEmptyRequired?: boolean;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = (props): React.JSX.Element => {
  let dropDownOptions = [...props.options];
  const styles = props.styles || {
    width: "200px",
    height: "30px",
  };

  if (props.isEmptyRequired) {
    const placeholderOption = {
      id: 0,
      value: "",
      label: props.placeholder || "Select a Category",
    };
    dropDownOptions = [placeholderOption, ...props.options];
  }

  return (
    <select onChange={props.onChange} style={styles}>
      {dropDownOptions.map((opt) => {
        return (
          <option key={opt.id} value={opt.value} selected={opt.isSelected}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
