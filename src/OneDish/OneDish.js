import React, { Component } from 'react';
import './OneDish.css';
import { Container, Row, Col } from 'react-grid-system';
import Sidebar from '../Sidebar/Sidebar';
import {modelInstance} from '../data/DinnerModel';

class OneDish extends Component {

  constructor(props){
    super(props);
    this.state = {
      status: 'INITIAL',
      numberOfGuests: this.props.model.getNumberOfGuests()
    }

  }
  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {
    this.props.model.removeObserver(this)
  }

  add(){
      modelInstance.addToMenu();
  } 

  update() {
    this.setState({
      numberOfGuests: this.props.model.getNumberOfGuests()
    })
  }


  componentDidMount() {
    // notifies change in number of guests
    this.props.model.addObserver(this);
    var splitted = window.location.href.split("/");
    var id = splitted[4];
    // when data is retrieved we update the state
    // this will cause the component to re-render
    modelInstance.getDish(id).then(dish => {
      this.setState({
        status: 'LOADED',
        title: dish.title,
        image: dish.image,
        ingredients: dish.extendedIngredients,
        preparation: dish.instructions,
        price: dish.pricePerServing
      })
      modelInstance.clickedDish(this.state.title, this.state.image, this.state.ingredients, this.state.preparation, this.state.price);

    }).catch(() => {
      this.setState({
        status: 'ERROR'
      })
    })
  }

  render() {
    let ingNameList = null;
    let ingAmountList = null;
    let ingUnitList = null;


    switch (this.state.status) {
      case 'INITIAL':
        ingNameList = <em>Loading...</em> 
        break;
      case 'LOADED':
       ingNameList = this.state.ingredients.map((ingr) =>
          <div className="ingName">{ingr.name}</div>
       )
       ingAmountList = this.state.ingredients.map((ingr) =>
          <div className="ingAmount">{ingr.amount.toFixed(2) * this.state.numberOfGuests}</div>
       )
       ingUnitList = this.state.ingredients.map((ingr) =>
          <div className="ingUnit">{ingr.unit}</div>
       )
        break;
      default:
        ingNameList = <b>Failed to load data, please try again</b>
        break;
    }



    return (
      <div className="OneDish">
        <Container>
          <Row debug>
            <Col xs={6} md={2}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={12} md={10}>
              <Row debug>
                <Col xs={6} md={5}>
                  <h3>{this.state.title}</h3>
                  <div id="521574"><img src={this.state.image} alt="Image" width="300px" height="300px" ></img></div>
                  <div className="smallText">
                      Lorem ipsum dolor sit amet, pri aeque sadipscing an. Putant patrioque eu nam, est modo sapientem efficiantur in. Sit latine alterum in. At mel reque ignota discere. Dicta sententiae sit ut, at hinc patrioque sea. Populo vidisse dolores mel id, molestiae aliquando te his. Te quo brute decore eligendi, suscipiantur necessitatibus usu ne, vel harum consequuntur in.
                  </div>
                  
                  <h3>PREPARATION</h3>
                  <p>{this.state.preparation}</p>
                </Col>
                <Col xs={6} md={5}>
                  <br/><br/>
                  <div id="rcorners2">
                    <Row>
                      INGREDIENTS FOR {localStorage.getItem("numGuests")} PEOPLE <br/>
                    </Row>
                    <Row>
                    <Col xs={2} md={2}>
                        {ingAmountList}
                      </Col>
                    <Col xs={2} md={4}>
                        {ingUnitList}
                      </Col>
                      <Col xs={2} md={6}>
                        {ingNameList}
                      </Col>
                    </Row>
                    <Row>
                    Total price: {(this.state.price * this.state.numberOfGuests).toFixed(2)}
                    </Row>
                    <Row>

                    <button id="addButton" className="btn" onClick={this.add}>Add to menu</button> 
                    </Row>
                  </div>
                </Col>
              </Row>
            </Col>        
          </Row>
        </Container>
      </div>
    );
  }
}

export default OneDish;