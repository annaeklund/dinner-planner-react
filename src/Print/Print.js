import React, { Component } from 'react';
import './Print.css';
import { Link } from 'react-router-dom';
import { modelInstance } from '../data/DinnerModel';
import { Container, Row, Col } from 'react-grid-system';
var titleList = [];
var imageList = [];
var priceList = [];
var menuList = [];
var totalPrice = 0;
var names = [];
var printList = [];

class Print extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

 	render() {
 		var menu = modelInstance.getFullMenu();
 		printList = menu.map((dish) =>
 			<div className="print">
 			<Row>
 				<Col xs={3} md={2}> <br/>
 					<img src={dish.image} alt="Image" width="100px" height="100px"></img>
 				</Col>
 				<Col xs={6} md={4}>
 					<Row>
 						<p>{dish.title}</p>
 					</Row>
 					<Row>
           				 Lorem ipsum dolor sit amet, ad audire volutpat ullamcorper est, legere commune mediocrem vel in. Viderer omnesque gubergren no qui, commodo blandit interpretaris ea sea. At justo periculis nam. At quo discere epicurei adolescens.
           			</Row>
 				</Col>
 				<Col xs={9} md={6}>
 					<Row>
 						<p>PREPARATION</p>
 					</Row>
 					<Row>
 						{dish.preparation}
 					</Row>
 				</Col>
 			</Row>
 			</div>)

	    return (
 <div className="Menu">
        <Container>
          <Row debug>	
          	<Col xs={9} md={6}>
          		<p>My dinner: {modelInstance.getNumberOfGuests()} people</p>
          	</Col>
            <Col xs={9} md={6}>
                <Link to="/search">
            		<button id="backButton" className="btn">Go back and edit dinner</button>
        		</Link>
            </Col>
          </Row>
          <Row>
          	{printList}
          </Row>
        </Container>
      </div>
	    );
	}
}

 export default Print;