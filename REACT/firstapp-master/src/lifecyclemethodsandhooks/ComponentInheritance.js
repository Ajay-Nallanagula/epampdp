import React from 'react'

//IS-A RELATIONSHIP

class Vehicle extends React.Component{

    render(args){
    return (<div>{this.props.children} {args}</div>)
    }
}

export class Bike extends Vehicle{
    //render is required for class, but here render is there in Vehicle class
}

export class Car extends Vehicle{
    //render is required for class, but here render is there in Vehicle class
}

export class TruckWay1 extends Vehicle{
render(){
//disadvantage the tagline will be rendered in different line , expected to render in same line
   return (<div>{super.render() } <span>This is HEAVY VEHICLE</span></div>)
  // return `${super.render()} This is HEAVY VEHICLE` //Output: [object Object] This is HEAVY VEHICLE
}
}

export class TruckWay2 extends Vehicle{
    render(){
    //disadvantage the tagline will be rendered in same line 
    //BUT you will have to change the render() of Vehicle base class to render(args), that might affect other child classes
    //That are inherited from Vehicle class, like this if tmmrw there is another use-case , we need to add more arguments
       return (<div>{super.render(<span>This is HEAVY VEHICLE</span>) } </div>)
      // return `${super.render()} This is HEAVY VEHICLE` //Output: [object Object] This is HEAVY VEHICLE
    }
    }