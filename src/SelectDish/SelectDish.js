import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        <h2>This is the Select Dish screen</h2>
        <Sidebar/>
        <Dishes/>
      </div>
    );
  }
}

export default SelectDish;
