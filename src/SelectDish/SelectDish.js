import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import { Container, Row, Col } from 'react-grid-system';

class SelectDish extends Component {
  render() {
    return (
      <div className="SelectDish">
        <Container fluid style={{ lineHeight: '200px'}}>
          <Row debug>
            <Col xs={6} md={4}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={12} md={8}>
              <Dishes/>
            </Col>        
          </Row>
        </Container>
      </div>
    );
  }
}

export default SelectDish;
