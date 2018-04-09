import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel';
import SelectDish from "./SelectDish/SelectDish";
import { Grid, Row, Col } from 'react-bootstrap';
import Main from "./Main/Main";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Dinner Planner',
    }
  }

  render() {
    return (
            <div className="App">
              <header className="App-header">
                <h1 className="App-title">{this.state.title}</h1>
                
                {/* We rended diffrent component based on the path */}
                <Route exact path="/" component={Welcome}/>
                <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
                // lägg till en till route till printview-sidan
              
              </header>
            </div>
    );
  }
}

export default App;
