import React, { Component } from 'react';
import './OneDish.css';
import { Container, Row, Col } from 'react-grid-system';
import Sidebar from '../Sidebar/Sidebar';
import Searchbar from '../Searchbar/Searchbar';
import { Link } from 'react-router-dom';

//import { Button } from 'react-native';

//var Button = require('react-native-button');
var dish = document.getElementById('521574');


class OneDish extends Component {


  render() {
    return (
      <div className="OneDish">
        <Container>
          <Row debug>
            <Col xs={6} md={2}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={12} md={10}>
              <Row debug>
              </Row>
              <Row debug>
                <Col xs={6} md={5}>
                  <h3>TITLE</h3>
                  <div className="figureBig" id="521574"><img src={"https://webknox.com/recipeImages/996863-556x370.jpg"} alt="Image" width="300px" height="300px" ></img><figcaption>Hej</figcaption></div>
                  <div className="smallText">lorem ipsum</div>
                  <Link to="/search">Back to search</Link><br/>
                  <h3>PREPARATION</h3>
                </Col>
                <Col xs={6} md={5}>
                <br/><br/>
                <div id="rcorners2">hej</div>
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