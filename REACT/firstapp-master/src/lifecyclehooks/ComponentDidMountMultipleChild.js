import React from 'react'
class ComponentDidMountMultipleChild extends React.Component{
// static getDerivedStateFromProps(nextProps,prevState){
// console.log({nextProps})
// console.log({prevState})
// }
componentDidMount() {console.log('componentDidMount called')}
render(){return <h1>{this.props.hits} times clicked</h1>}
}
export default ComponentDidMountMultipleChild