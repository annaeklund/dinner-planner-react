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

- få fram id-numret hos den klickade maträtten CHECK
- spara info om maträtt i clickedDish-lista CHECK
- få över clickedDish till oneDish CHECK
- visa info från clickedDish i oneDish-view CHECK

- implementera add to menu:
  - spara den klickade maträttens information i lista {title: dish.title, preparation: dish.description} osv
  - få in namn & pris i sidebar
- få filtrering att funka

- print recipe

småfix:
- implementera local storage, dvs en ändring av antalet gäster ska sparas
- number of guests korrekt i one dish view



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
