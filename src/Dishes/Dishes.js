import React, {Component} from 'react';
import './Dishes.css';
// Alternative to passing the moderl as the component property, 
// we can import the model instance directly
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
  // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to call the API and get the data
  // componentDidMount = () => {
  //   // when data is retrieved we update the state
  //   // this will cause the component to re-render
  //   modelInstance.getAllDishes().then(dishes => {
  //     this.setState({
  //       status: 'LOADED',
  //       dishes: dishes.results
  //     })
  //   }).catch(() => {
  //     this.setState({
  //       status: 'ERROR'
  //     })
  //   })
  // }

  componentWillReceiveProps(newProps) {
    if (newProps.dishes.length > 0) {
      this.setState({
        status: 'LOADED'
      })
    }
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
        dishesList = this.props.dishes.map((dish) =>
          <div><Link to={"/onedish/" + dish.id}><div className="figure" id={dish.id}><img src={"https://spoonacular.com/recipeImages/" + dish.image} alt="Image" width="100px" height="100px" onClick={() => {this.imageClick}}></img><figcaption>{dish.title.substr(0, 24) + "\u2026"}</figcaption></div></Link></div>)
          
        break;
      default:
        dishesList = <b>Failed to load data, please try again</b>
    }
    return (
          <div className="Dishes">
            <h3>Dishes</h3>
            {dishesList}
          </div>
       
    );
  }
}



export default Dishes;
