import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/DinnerModel';
import { Container, Row, Col } from 'react-grid-system';
var titleList = [];
var imageList = [];
var priceList = [];
var menuList = [];
var totalPrice = 0;

class Menu extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }


 	render() {
	  	var menu = modelInstance.getFullMenu();
	  	for(var i=0; i< menu.length; i++){
	  		titleList.push(menu[i].title);
	  		imageList.push(menu[i].image);
	  		priceList.push(menu[i].price);
	  	}
	  	console.log(imageList);
	  	for(var i=0; i<priceList.length; i++){
	  		totalPrice += priceList[i];
	  	}

	  	//modelInstance.setMenuNames(titleList);


	  	menuList = menu.map((dish) =>
          <div className="figure"><img src={dish.image} alt="Image" width="100px" height="100px"></img><figcaption>{dish.title.substr(0, 24) + "\u2026"}<br/>{dish.price * modelInstance.getNumberOfGuests()} SEK</figcaption></div>)


	    return (
 <div className="Menu">
        <Container>
          <Row debug>	
          	<Col xs={5} md={4}>
          		<p>My dinner: {modelInstance.getNumberOfGuests()} people</p>
          	</Col>
          	<Col xs={6} md={4}>
          		<p>Total: {totalPrice * modelInstance.getNumberOfGuests()} SEK</p>
          		</Col>
            <Col xs={7} md={4}>
                <Link to="/search">
            		<button id="backButton" className="btn">Go back and edit dinner</button>
        		</Link>
            </Col>
          </Row>
          <Row>
          	{menuList}
          </Row>
          <Row>
          	
        </Row>
        <Row>
        	<Link to="/print">
            	<button id="printButton" className="btn">Print full recipe</button>
        	</Link>
        </Row>
        </Container>
      </div>
	    );
	}
}

export default Menu;