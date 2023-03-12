//ComponentDidUpdateDemoParent
import React from "react";
import ComponentDidUpdateDemo2Child from './ComponentDidUpdateDemo2Child'
const options = [
  { key: null, name: null },
  { key: "1", name: "Emp1" },
  { key: "2", name: "Emp2" },
];
class ComponentDidUpdateDemoParent extends React.Component {
  state = { empValue: null };

  onChangeHandler = (event) => {
    this.setState({ empValue: event.target.value });
  };

  findName = (optKey) => {
      return options.find(({ key }) => key === optKey)?.name
    }

  render() {
    return (
      <div>
        <div><label>Select an Employee</label>  </div>      
        <select onChange={this.onChangeHandler}>
          {options.map(({ key, name }) => {
            return (
              <option value={key}>
                {name}
              </option>
            );
          })}
        </select>
        { this.state.empValue &&(<div>
            Selected Value : {this.findName(this.state.empValue)}
            <div><ComponentDidUpdateDemo2Child id={this.state.empValue}/></div>
        </div>)}
      </div>
    );
  }
}

export default ComponentDidUpdateDemoParent;
