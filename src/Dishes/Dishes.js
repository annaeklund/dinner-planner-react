import React, {Component} from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
import {modelInstance} from '../data/DinnerModel';
import { Route } from 'react-router-dom';
import { Router } from 'react-router';
import { Redirect } from 'react-router-dom'
import OneDish from '../OneDish/OneDish';
import { Link } from 'react-router-dom';



class Dishes extends Component {
  constructor(props) {
    super(props);
    this.imageClick = this.imageClick.bind(this)
    // We create the state to store the various statuses
    // e.g. API data loading or error 
    this.state = {
      status: 'INITIAL'
    }
  }

  imageClick(){
    this.props.history.pushState('/onedish');

  }
  changeVariable(){
    return 3;
  }
     // var transition = Route.transitionTo();
    //transition("/onedish");
      //this.props.history.pushState(null, '/onedish');
   // this.context.router.transitionTo('/onedish', {objectId: 'asdf'})


  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  componentDidMount = () => {
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getAllDishes().then(dishes => {
      this.setState({
        status: 'LOADED',
        dishes: dishes.results
      })
    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
    let dishesList = null;
    
    // depending on the state we either generate
    // useful message to the user or show the list
    // of returned dishes

    switch (this.state.status) {
      case 'INITIAL':
        dishesList = <em>Loading...</em> 
        break;
      case 'LOADED':
        dishesList = this.state.dishes.map((dish) =>
          <div><Link to={"/onedish/" + dish.id}><div className="figure" id={dish.id}><img src={"https://spoonacular.com/recipeImages/" + dish.image} alt="Image" width="100px" height="100px" onClick={() => {this.imageClick}}></img><figcaption>{dish.title.substr(0, 24) + "\u2026"}</figcaption></div></Link></div>),
          myVariable = this.changeVariable();
          }
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
        break;
    }
    console.log(dishesList[0]);
    return (
          <div className="Dishes">
            <h3>{myVariable}</h3>
            {dishesList}
          </div>
       
    );
  }
}



export default Dishes;
