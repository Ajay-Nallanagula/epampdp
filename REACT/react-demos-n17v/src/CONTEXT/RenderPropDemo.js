import React from "react";

const employees = [
  {
    name: "Ajay",
    experience: 8,
    companies: "Mphasis,Epam,Amphora",
  },
  {
    name: "Manohar",
    experience: 10,
    companies: "Wipro,Infosys,Amphora",
  },
  {
    name: "Praveen",
    experience: 4,
    companies: "JDA,Amphora",
  },
];

//TEMPLATE COMPONENT
export class RenderPropDemo extends React.Component {
  state = {
    employees: [...employees],
  };

  handleClick = (e)=>{
    console.log(e.target.textContent)
  }

  render() {
    const { employees } = this.state;
    return (
      <div>
        {this.props.render({
          employees: employees,
          handleClick:this.handleClick
        })}
      </div>
    );
  }
}

//BASE Component, where template is been passed
export class EmployeeButtons extends React.Component {
  
  render() {
    return (
      <>
        <h1>Render Props Demo</h1>
        <RenderPropDemo
          render={({ employees ,handleClick}) => {
            return employees.map(({ name, experience }) => {
              return (
                <div style={{ padding: "10px" }}>
                  <button name={name} key={experience} onClick={handleClick}>
                    {name.toUpperCase()}
                  </button>
                </div>
              );
            });
          }}
        />
      </>
    );
  }
}

//Another BASE Component, where template is been passed
export class EmployeeList extends React.Component {
  
  render() {
    return (
      <>
        <h1>Render Props Demo List</h1>
        <RenderPropDemo
          render={({ employees }) => {
                return employees.map(({name,experience})=>{
                   return (<li key={experience}>{name}</li>)
                })}}/>
      </>
    );
  }
}
