import React from 'react'
class ComponentShouldComponentUpdate extends React.Component {
  state = {
    rupee: 0
  };
  handleChange = this.handleChange.bind(this);

  handleChange(e) {
    this.setState({rupee: (e.target.value)|0});
  }

  shouldComponentUpdate(props, state) {
      //Update only if the number entered is divisble by 10 and remainder is zero
    return state.rupee%10==0;
  }

  render() {
		return (
			<div>
        <div className="ui input">
          <input placeholder="how much do you have?" type="text" onBlur={this.handleChange} />
        </div>
        <div>
  				Rs.10 per apple.<br />
          you can buy {this.state.rupee/10} apples
        </div>
			</div>
		)
	}
}

export default  ComponentShouldComponentUpdate