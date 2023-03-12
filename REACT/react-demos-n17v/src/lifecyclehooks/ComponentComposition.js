import React from 'react'

//HAS-A RELATIONSHIP

export default class Vehicle extends React.Component{
    render(){
        return (<div>{this.props.children}</div>)
    }
}

export class Bike1 extends React.Component{
    render(){
        return(<Vehicle>{this.props.children}</Vehicle>)
    }
}

export class Car1 extends React.Component{
    render(){
        return(<Vehicle>{this.props.children}</Vehicle>)
    }
}

export class TruckWay11 extends React.Component{
    render(){
        return(<Vehicle>{this.props.children}</Vehicle>)
    }
}