import React, { Component } from 'react';
import './Main.css';

import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import SelectDish from '../SelectDish/SelectDish';
import { Grid, Row, Col } from 'react-bootstrap';

class Main extends Component {

	render() {
	    return (
	    	<Grid>
	    		<Row>
	    			console.log("hejsan"); 
	    			<h1>{App.state.title}</h1>
	    		</Row>
	    		<Row></Row>
		        <Col xs={4} md={2}>
		        </Col>
		    </Grid>
	    );
	}

}

export default Main;