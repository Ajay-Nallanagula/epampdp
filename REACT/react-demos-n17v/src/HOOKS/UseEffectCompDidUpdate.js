import React, { useState } from "react";
import UseEffectCompDidUpdateChild from './UseEffectCompDidUpdateChild'

const options = [
  { key: null, name: null },
  { key: "1", name: "Emp1" },
  { key: "2", name: "Emp2" },
];

const UseEffectCompDidUpdate = () => {
  const [empValue, setEmpValue] = useState(null);

  const onChangeHandler = (event) => {
    setEmpValue(event.target.value);
  };

  const findName = (optKey) => {
    return options.find(({ key }) => key === optKey)?.name;
  };

  return (
    <div>
      <div>
        <label>Select an Employee</label>{" "}
      </div>
      <select onChange={onChangeHandler}>
        {options.map(({ key, name }) => {
          return (
            <option key={key} value={key}>
              {name}
            </option>
          );
        })}
      </select>
      {empValue && (
        <div>
          Selected Value : {findName(empValue)}
          <UseEffectCompDidUpdateChild empValue={empValue}/>
          <div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UseEffectCompDidUpdate;
