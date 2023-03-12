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
export class RenderPropsImplStyle extends React.Component {
  state = {
    employees: [...employees],
  };
  render() {
    return <div>{this.props.children(this.state.employees)}</div>;
  }
}

export class BaseComponent extends React.Component {
  render() {
    return (
      <RenderPropsImplStyle>
        {(employees) => {
          return (
            <div>
              <h1>Render Props Implementation using "this.props.children([params])"</h1>
              <div>{JSON.stringify(employees)}</div>
            </div>
          );
        }}
      </RenderPropsImplStyle>
    );
  }
}
