import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel';
import SelectDish from "./SelectDish/SelectDish";
import OneDish from './OneDish/OneDish';
import Menu from './Menu/Menu';
import Print from './Print/Print';

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
                <h1 className="App-title"><br/>{this.state.title}<br/><br/></h1>
                
                {/* We rended diffrent component based on the path */}
                <Route exact path="/" component={Welcome}/>
                <Route path="/search" render={() => <SelectDish model={modelInstance}/>}/>
                <Route path="/onedish" render={() => <OneDish model={modelInstance}/>}/>
                <Route path="/menu" component={Menu}/>
                <Route path="/print" component={Print}/>
              
              </header>
            </div>
    );
  }
}

export default App;
