import React, { ChangeEvent } from "react";

interface IOption {
  id: string | number;
  value: string | number;
  label: string;
}

interface DropdownProps {
  options: IOption[];
  onChange?: React.ChangeEventHandler//(event: ChangeEvent<HTMLInputElement>) => void;
  styles?: any;
  placeholder?: string;
}

const Dropdown: React.FC<DropdownProps> = (props): React.JSX.Element => {
  const styles = props.styles || {
    margin: "5px",
    width: "300px",
    height: "30px",
  };
  const placeholderOption = {
    id: 0,
    value: "",
    label: props.placeholder || "Select a Category",
  };
  return (
    <select onChange={props.onChange} style={styles}>
      {[placeholderOption, ...props.options].map((opt) => {
        return (
          <option key={opt.id} value={opt.value}>
            {opt.label}
          </option>
        );
      })}
    </select>
  );
};

export default Dropdown;
