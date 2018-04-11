import React, { Component } from 'react';
import './Searchbar.css';
import Dropdown from 'react-dropdown'
import 'react-dropdown/style.css'


class Searchbar extends Component { 
	constructor(props) {
	   super(props);
	   this.state = {
	   	value: null,
	   	filter: null
	   };

	   this.handleChange = this.handleChange.bind(this);
	   this.handleSubmit = this.handleSubmit.bind(this);
	  }

	handleChange(event) {
	   this.setState({ [event.target.name]: event.target.value});
	   	//value: event.target.value});
	   //this.setState({filter: event.target.filter});
	  }

	handleSubmit(event) {
		//this.state.filter = this.state.filter.bind(this);
	   alert('You chose: ' + this.state.value + ' and filtered on: ' + this.state.filter);

	   event.preventDefault();
	  }
	render(){
		return(
			<div>
				<h3>FIND A DISH</h3>
				<form onSubmit={this.handleSubmit}>
				<input type="search" name="filter" value={this.state.filter} onChange={this.handleChange}/>
      		  		<label>
			          <select name="value" value={this.state.value} onChange={this.handleChange}>
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
		        <input type="submit" value="Search"/>
		      </form>
		    </div>
		);
	}
}

export default Searchbar;