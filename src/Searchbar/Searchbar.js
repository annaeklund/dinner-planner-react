import React, { Component } from 'react';
import './Searchbar.css';
import 'react-dropdown/style.css'
//import modelInstance from '../data/DinnerModel';


class Searchbar extends Component { 
	constructor(props) {
	   super(props);
	   this.state = {
	   	value: '',
	   	filter: ''
	   };

	   //console.log(this.props)

	   this.handleChange = this.handleChange.bind(this);
	   this.handleSubmit = this.handleSubmit.bind(this);
	  }

	handleChange(event) {
		// setting the type and filter to this.state.value & this.state.filter
	   this.setState({ [event.target.name]: event.target.value});
	  }

	handleSubmit(event) {
		event.preventDefault();

		const options = {
			type: this.state.value,
			query: this.state.filter
		}
		this.props.onSubmit(options);

	   // alert('You chose: ' + this.state.value + ' and filtered on: ' + this.state.filter);

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