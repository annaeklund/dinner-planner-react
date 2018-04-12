import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Welcome from './Welcome/Welcome';
import { modelInstance } from './data/DinnerModel';
import SelectDish from "./SelectDish/SelectDish";
import { Grid, Row, Col } from 'react-bootstrap';
import OneDish from './OneDish/OneDish';

/*

TODO

- få fram id-numret hos den klickade maträtten
- spara info om maträtt i clickedDish-lista
- få över clickedDish till oneDish
- visa info från clickedDish i oneDish-view

- implementera add to menu:
  - spara den klickade maträttens information i lista {title: dish.title, preparation: dish.description} osv
  - få in namn & pris i sidebar



*/



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
                <Route path="/onedish" render={() => <OneDish model={modelInstance}/>}/>
              
              </header>
            </div>
    );
  }
}

export default App;
