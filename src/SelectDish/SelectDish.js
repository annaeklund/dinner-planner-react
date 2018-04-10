import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import { Container, Row, Col } from 'react-grid-system';
import Searchbar from '../Searchbar/Searchbar';

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        <Container>
          <Row debug>
            <Col xs={6} md={2}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={12} md={10}>
              <Row debug>
                <Searchbar/>
              </Row>
              <Row debug>
                <Dishes/>
              </Row>
            </Col>        
          </Row>
        </Container>
      </div>
    );
  }
}

export default SelectDish;
