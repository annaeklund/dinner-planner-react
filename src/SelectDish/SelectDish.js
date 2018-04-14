import React, { Component } from 'react';
import './SelectDish.css';
import Sidebar from '../Sidebar/Sidebar';
import Dishes from '../Dishes/Dishes';
import { Container, Row, Col } from 'react-grid-system';
import Searchbar from '../Searchbar/Searchbar';

class SelectDish extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dishes: []
    }
    this.search = this.search.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
  }

  componentDidMount() {
    this.search()
  }
  search(options = {}) {
    this.props.model.getDishes(options).then(response => {
      this.setState({
        dishes: response.results
      })
    })
  }
  handleSearch(options) {
    this.search(options)
  }
  render() {
    return (
      <div className="SelectDish">
        <Container>
          <Row debug>
            <Col xs={3} md={2}>
              <Sidebar model={this.props.model}/>  {/*We pass the model as property to the Sidebar component */}
            </Col>
            <Col xs={15} md={10}>
              <Row debug>
                <Searchbar model={this.props.model} onSubmit={this.handleSearch}/>
              </Row>
              <Row debug>
                <Dishes dishes={this.state.dishes} />
              </Row>
            </Col>        
          </Row>
        </Container>
      </div>
    );
  }
}

export default SelectDish;
