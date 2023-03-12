import React from "react";
import ComponentWillUnMountDemo2 from './ComponentWillUnMountDemo2'
import ComponentWillUnMountDemo1 from './ComponentWillUnMountDemo1'
class ComponentWillUnMountDemo extends React.Component {
  state = {
    comp: null,
  };
  options = [
    { key: "C1", value: "ComponentWillUnMountDemo1" },
    { key: "C2", value: "ComponentWillUnMountDemo2" },
  ];
  handleChange = (event) => {
    this.setState({ comp: event.target.value });
  };
  componentWillUnmount() {
    console.log("ComponentWillUnMountDemo is called");
  }
  render() {
      const comp = this.state.comp
    return (
      <div>
        <div>ComponentWillUnMountDemo</div>
        <div>
          <select onChange={this.handleChange}>
            {this.options.map(({ key, value }) => {
              return (
                <option key={key} value={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
        {comp==='C1'  && <div><ComponentWillUnMountDemo1/></div>}
        {comp==='C2'  && <div><ComponentWillUnMountDemo2/></div>}
      </div>
    );
  }
}
export default ComponentWillUnMountDemo;
