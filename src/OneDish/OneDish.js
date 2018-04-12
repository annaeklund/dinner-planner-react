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
    var splitted = window.location.href.split("/");
    var id = splitted[4];

    return (
      <div className="OneDish">
        <Container>
          <Row debug>
            <Col xs={6} md={3}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={12} md={9}>
              <Row debug>
              </Row>
              <Row debug>
                <Col xs={6} md={5}>
                  <h3>TITLE</h3>
                  <p></p>
                  <div id="521574"><img src={"https://webknox.com/recipeImages/996863-556x370.jpg"} alt="Image" width="300px" height="300px" ></img></div>
                  <div className="smallText">
                      Lorem ipsum dolor sit amet, pri aeque sadipscing an. Putant patrioque eu nam, est modo sapientem efficiantur in. Sit latine alterum in. At mel reque ignota discere. Dicta sententiae sit ut, at hinc patrioque sea. Populo vidisse dolores mel id, molestiae aliquando te his. Te quo brute decore eligendi, suscipiantur necessitatibus usu ne, vel harum consequuntur in.
                  </div>
                  <Link to="/search">Back to search</Link><br/>
                  <h3>PREPARATION</h3>
                </Col>
                <Col xs={6} md={5}>
                <br/><br/>
                <div id="rcorners2">INGREDIENTS FOR X PEOPLE <br/> <Link to="/search">Add to menu</Link><br/></div>
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