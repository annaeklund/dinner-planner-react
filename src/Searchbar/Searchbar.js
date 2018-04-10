import React, { Component } from 'react';
import './Searchbar.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Searchbar extends Component { 
	constructor(props) {
	   super(props);
	   this.state = {value: 'appetizer'};

	   this.handleChange = this.handleChange.bind(this);
	   this.handleSubmit = this.handleSubmit.bind(this);
	  }

	handleChange(event) {
	   this.setState({value: event.target.value});
	  }

	handleSubmit(event) {
	   alert('Your favorite flavor is: ' + this.state.value);
	   event.preventDefault();
	  }
	render(){
		return(
			<div>
				<h3>FIND A DISH</h3>
				<form onSubmit={this.handleSubmit}>
      		  		<label>
		         	 Choose dish 
			          <select value={this.state.value} onChange={this.handleChange}>
							<option value="appetizer">appetizer</option>
							<option value="beverage">beverage</option>
							<option value="bread">bread</option>
							<option value="breakfast">breakfast</option>
							<option value="dessert">dessert</option>
							<option value="drink">drink</option>
							<option value="main course">main course</option>
							<option value="salad">salad</option>
							<option value="sauce">sauce</option>
							<option value="side dish">side dish</option>
							<option value="soup">soup</option>
			          </select>
			        </label>
		        <input type="submit" value="Search" />
		      </form>
		    </div>
		);
	}
}

export default Searchbar;