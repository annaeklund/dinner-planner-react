import React, { Component } from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/DinnerModel';
import { Container, Row, Col } from 'react-grid-system';

class Menu extends Component {

 	render() {
 		var totalPrice = 0;
 		var menuList = [];
 		var titleList = [];
		var imageList = [];
		var priceList = [];
	  	var menu = modelInstance.getFullMenu();
	  	for(var i=0; i< menu.length; i++){
	  		titleList.push(menu[i].title);
	  		imageList.push(menu[i].image);
	  		priceList.push(menu[i].price);
	  	}
	  	for(var j=0; j<priceList.length; j++){
	  		totalPrice += priceList[j];
	  	}

	  	menuList = menu.map((dish) =>
          <div className="figure"><img src={dish.image} alt="Image" width="100px" height="100px"></img><figcaption>{dish.title.substr(0, 24) + "\u2026"}<br/>{(dish.price * modelInstance.getNumberOfGuests()).toFixed(2)} SEK</figcaption></div>)


	    return (
 <div className="Menu">
        <Container>
          <Row debug>	
          	<Col xs={5} md={4}>
          		<p>My dinner: {modelInstance.getNumberOfGuests()} people</p>
          	</Col>
          	<Col xs={6} md={4}>
          		<p>Total: {(totalPrice * modelInstance.getNumberOfGuests()).toFixed(2)} SEK</p>
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